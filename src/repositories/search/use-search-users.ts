import { useMemo } from "react";

import axios from "axios";
import qs from "query-string";
import { useQuery } from "react-query";

import type { SearchUserVariables, User } from "../../model";

interface Dependencies {
  variables?: Partial<SearchUserVariables>;
}

const useSearchUsers = (deps?: Dependencies) => {
  const { variables } = deps ?? {};

  const _variables: SearchUserVariables = {
    q: variables?.q || "",
    per_page: variables?.per_page || 5,
    ...variables,
  };

  const query = qs.stringify(_variables);

  const url = `https://api.github.com/search/users?${query}`;

  const getUsers = async () => {
    const response = await axios.get<{ items: User[] }>(url);
    return response.data.items;
  };

  const { data, error, isLoading } = useQuery<User[], Error>(
    ["users", url],
    () => getUsers(),
    { enabled: !!_variables.q, retry: false }
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

export default useSearchUsers;
