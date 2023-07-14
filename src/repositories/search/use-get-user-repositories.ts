import { useMemo } from "react";

import axios from "axios";
import { useQuery } from "react-query";

import type { GetUserRepositoriesVariables, Repository } from "../../model";

interface Dependencies {
  variables: GetUserRepositoriesVariables;
}

const useGetUserRepositories = (deps: Dependencies) => {
  const { variables } = deps;

  const url = `https://api.github.com/users/${variables.user}/repos`;

  const getUserRepositories = async () => {
    const response = await axios.get<Repository[]>(url);

    return response.data;
  };

  const { data, error, isLoading } = useQuery<Repository[], Error>(
    ["repositories", url],
    () => getUserRepositories(),
    { enabled: !!variables.user, retry: false }
  );

  return useMemo(() => {
    const normalized = data ?? [];

    return {
      data: normalized,
      error,
      loading: isLoading,
    };
  }, [data, error, isLoading]);
};

export default useGetUserRepositories;
