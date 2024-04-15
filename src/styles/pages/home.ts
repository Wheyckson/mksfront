import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 7.25rem 0px;
  width: 100%;
  gap: 1.375rem;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f3f3f3;

  @media (max-width: 510px) {
    display: flex;
    padding: 4rem 0;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 13.5rem;
  height: 17.8rem;
  padding: 1rem;
  border-radius: 1rem;
  justify-content: space-between;
  border-radius: 1rem 1rem 0 0;

  img: {
    objectfit: "cover";
  }

  div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    margin-top: 0.875rem;
  }

  em {
    font-size: 1rem;
    font-weight: 400;
    color: #2c2c2c;
  }

  span {
    display: flex;
    width: 9rem;
    height: 1.625rem;
    justify-content: center;
    align-items: center;
    padding: 0.375rem;
    border-radius: 4px;
    background: #373737;
    color: white;
    font-weight: 700;
  }
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 1.2;
  color: #2c2c2c;

  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 3; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;

export const ButtonBuy = styled.button`
  display: flex;
  width: 100%;
  height: 2rem;
  border: none;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #0f52ba;
  border-radius: 0 0 1rem 1rem;
  color: white;

  span {
    font-size: 12px;
    font-weight: 600;
    color: white;
  }

  &:not(:disabled):hover {
    background-color: #003d9b;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6rem;
    background-color: #002c70;
  }
`;
