import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  max-width: 1180;
  margin: 0 auto;
`;

export const CartContainer = styled.button`
  display: flex;
  background-color: white;
  min-width: 5.6rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: none;

  transition: all 0.2s;

  &:not(:disabled):hover {
    background-color: #eaeaf0;
  }

  span {
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
