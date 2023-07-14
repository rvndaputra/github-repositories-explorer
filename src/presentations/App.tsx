import type { FC } from "react";

import AuxProvider from "../context";
import useEmitter from "../hooks/useEmitter";

import UserList from "./components/UserList";
import * as styles from "./styles";

import useEventSearch from "./usecase/use-event-search";

const App: FC = () => {
  const emitter = useEmitter();

  const { searchValue, handleSearchChange, handleSearchSubmit } =
    useEventSearch({
      emitter,
    });

  return (
    <AuxProvider emitter={emitter}>
      <div className={styles.containerStyles}>
        <form
          className={styles.inputContainerStyles}
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            className={styles.inputStyles}
            placeholder="Enter GitHub username"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button type="submit" className={styles.buttonStyles}>
            Search
          </button>
        </form>
        <UserList />
      </div>
    </AuxProvider>
  );
};

export default App;
