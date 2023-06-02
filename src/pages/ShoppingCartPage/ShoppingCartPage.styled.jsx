import styled from "@emotion/styled";
import { Container } from "shared/components/Container.styled";


export const ShoppingCartPageSheet = styled.section`
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
    justify-content: flex-start;
    gap: 20px;
  }
  .wrapper-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cart-form__wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cart-form__field {
    width: 500px;
    padding: 10px 20px;
    border-radius: 20px;
  }

  .cart-list {
    display: flex;
    flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 20px;
  }

  .cart-list__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .cart__submit-wrap {
    position: absolute;
    bottom: 30%;

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

export const ContainerCart = styled(Container)`
  height: 150vh;
`
