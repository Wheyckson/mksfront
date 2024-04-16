import styled from "styled-components";

export const OpenContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #0f52ba;
  position: fixed;
  top: 0;
  right: 0;
  width: 30.375rem;
  height: 100%;
  z-index: 1;
  justify-content: space-between;
  box-shadow: 0px 0px 14px 0px darkslategray;

  @media (max-width: 585px) {
    width: auto;
  }
`;

export const BuyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 0 1.5rem;
  height: 100%;
  overflow-x: hidden;
  scrollbar-width: thin;
`;

export const OpenHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
  margin-bottom: 4rem;

  svg {
    background-color: black;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const CloseButton = styled.div`
  display: flex;
  height: 200%;
  justify-content: flex-end;

  svg {
    background-color: black;
    padding: 4px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    width: 18px;
    height: 18px;
  }
`;

export const CartItens = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.5fr 1fr 0fr;
  background-color: white;
  align-items: center;
  border-radius: 8px;
  height: 5.938rem;
  padding: 1.438rem 0;
  margin-bottom: 1rem;
  justify-content: space-between;
  justify-items: center;

  img {
    width: 46px;
    height: 57px;
    object-fit: cover;
  }

  span {
    max-width: 5.25rem;
    color: #2c2c2c;
    font-size: 0.813rem;
  }

  h1 {
    font-size: 0.875rem;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

export const QtdContainer = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 0.313rem;
  }

  div {
    display: flex;
    align-items: center;
    border: 1px solid #bfbfbf;
    border-radius: 4px;

    button {
      display: flex;
      border: none;
      width: 1rem;
      justify-content: center;
      background-color: white;
      color: black;
    }

    button:first-child {
      border-right: 1px solid #bfbfbf;
    }

    span {
      font-size: 8px;
      padding: 0px 6px;
    }

    button:last-child {
      border-left: 1px solid #bfbfbf;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CartValue = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
`;
export const FinishBuy = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  height: 4.063rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
`;
