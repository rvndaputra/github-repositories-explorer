import { css } from "@emotion/css";

export const containerStyles = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const inputContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const inputStyles = css`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const buttonStyles = css`
  padding: 12px 16px;
  background-color: #1677ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
`;
