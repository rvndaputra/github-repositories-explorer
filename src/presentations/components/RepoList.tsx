import type { FC } from "react";

import { useGetUserRepositories } from "../../repositories/search";

import * as styles from "./styles";

interface RepoListProps {
  selectedUser: string;
}

const RepoList: FC<RepoListProps> = (props) => {
  const { selectedUser } = props;

  const { data, loading, error } = useGetUserRepositories({
    variables: { user: selectedUser },
  });

  if (loading) return <div className={styles.loadingStyles}>Loading...</div>;
  if (error)
    return (
      <div className={styles.errorStyles}>
        Error occurred while fetching repositories. Please try again.
      </div>
    );
  if (!loading && !data.length)
    return <div className={styles.noDataStyles}>No data found.</div>;

  return (
    <ul className={styles.repoListStyles}>
      {data.map((repo) => (
        <li key={repo.id} className={styles.repoItemStyles}>
          <div>
            <div className={styles.repoNameStyles}>{repo.name}</div>
            {repo.description && (
              <div className={styles.repoDescriptionStyles}>
                {repo.description}
              </div>
            )}
          </div>
          <div className={styles.repoStarStyles}>
            {repo.stargazers_count.toLocaleString()} ⭐️
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
