export interface SearchUserVariables {
  q: string;
  per_page?: number;
}

export interface GetUserRepositoriesVariables {
  user: string;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}
