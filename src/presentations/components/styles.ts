import { css } from "@emotion/css";

export const userListStyles = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const listItemStyles = css`
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const userHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const userLoginStyles = css`
  flex: 1;
  margin-left: 10px;
  font-weight: 700;
`;

export const repoListStyles = css`
  list-style: none;
  padding: 0;
  padding-top: 12px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const repoItemStyles = css`
  padding: 10px;
  background-color: #fefefe;
  border-radius: 4px;
`;

export const repoNameStyles = css`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const repoDescriptionStyles = css`
  margin-bottom: 5px;
`;

export const repoStarStyles = css`
  color: #1677ff;
  min-width: 75px;
`;

export const noDataStyles = css`
  margin-top: 10px;
`;

export const errorStyles = css`
  color: red;
  margin-top: 10px;
`;

export const loadingStyles = css`
  text-align: center;
  margin-top: 20px;
`;
