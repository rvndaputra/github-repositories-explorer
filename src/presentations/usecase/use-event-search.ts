import { useCallback, useState } from "react";
import type { AuxEmitter } from "../../model";

interface Dependencies {
  emitter: AuxEmitter;
}

const useEventSearch = (deps: Dependencies) => {
  const { emitter } = deps;

  const [searchValue, setSearchValue] = useState("");

  const _onSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const _onSearchSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      emitter.emit("@search/submit", searchValue);
    },
    [emitter, searchValue]
  );

  return {
    searchValue,
    handleSearchChange: _onSearchChange,
    handleSearchSubmit: _onSearchSubmit,
  };
};

export default useEventSearch;
