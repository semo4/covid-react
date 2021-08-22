import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: #d8e2dc;
`;

export const ALink = styled.a`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
`;

export default {
  PaginationContainer,
  ALink,
};
