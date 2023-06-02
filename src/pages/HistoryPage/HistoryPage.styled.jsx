import styled from "@emotion/styled";
import { Container } from "shared/components/Container.styled";


export const HistoryPageSheet = styled.section`
  height: 200vh;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;

  .cart-form {
  }

  .cart-wrap__title {
    display: inline-block;
    margin-bottom: 20px;
  }
  .wrapper-connect {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }
  .wrapper-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cart-form__wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .plcholder-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cart-form__field {
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
  }

  .orders-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .cart-list {
    display: flex;
    fle-direction: column;
    gap: 20px;
  }

  .cart-list__item {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
      border: 1px solid #fff;
      background-color: transparent;
      color: #fff;
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
`;

export const ContainerHistory = styled(Container)`
  height: 100%;
`