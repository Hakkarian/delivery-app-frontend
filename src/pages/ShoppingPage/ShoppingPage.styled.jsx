import styled from "@emotion/styled";


export const ShoppingPageSheet = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  gap: 20%;

  .shops {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .shops-title {
    font-size: 30px;
  }
  .shops-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  button {
    padding: 10px 20px;

    font-family: "Manrope", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0.03em;

    color: #fff;
    background-color: #000;

    border: 1px solid transparent;
    border-radius: 20px;

    transition: background-color 250ms linear, color 250ms linear,
      border 250ms linear;

    &:hover,
    &:focus {
      border: 1px solid #000;
      background-color: transparent;
      color: #000;
    }

    &:disabled {
      border: none;
      background-color: grey;
      color: #000;

      &:hover,
      &:focus {
        background-color: red;
        color: #fff;
      }
    }
  }
  .products {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }

  .products-list {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .ignored {
    pointer-events: none;
  }
`;