import type { FC } from "react";
import { useEffect, useState } from "react";

import { useAuxContext } from "../../context";
import { useSearchUsers } from "../../repositories/search";

import RepoList from "./RepoList";
import * as styles from "./styles";

const UserList: FC = () => {
  const { emitter } = useAuxContext();

  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const {
    data: usersData,
    loading: isUsersLoading,
    error: isUsersError,
  } = useSearchUsers({ variables: { q: searchValue } });

  const handleUserSelect = (username: string) => {
    if (selectedUser === username) return setSelectedUser("");

    setSelectedUser(username);
  };

  const onSubmit = (q: string) => {
    setSearchValue(q);
  };

  useEffect(() => {
    emitter.on("@search/submit", onSubmit);
    return () => {
      emitter.off("@search/submit", onSubmit);
    };
  });

  if (isUsersLoading)
    return <div className={styles.loadingStyles}>Loading...</div>;
  if (isUsersError)
    return (
      <div className={styles.errorStyles}>
        Error occurred while fetching repositories. Please try again.
      </div>
    );
  if (searchValue && !isUsersLoading && !usersData.length)
    return <div className={styles.noDataStyles}>No data found.</div>;

  return (
    <ul className={styles.userListStyles}>
      {usersData.map((user) => (
        <li key={user.id} className={styles.listItemStyles}>
          <div
            className={styles.userHeaderStyles}
            onClick={() => handleUserSelect(user.login)}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              height={40}
              width={40}
            />
            <span className={styles.userLoginStyles}>{user.login}</span>
            {selectedUser === user.login ? "-" : "+"}
          </div>
          {selectedUser === user.login && (
            <RepoList selectedUser={selectedUser} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
