import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  background-color: #0f52ba;
  padding: 0px 8rem 0px 4rem;

  @media (max-width: 459px) {
    padding: 0px;
    justify-content: space-evenly;
  }
`;
