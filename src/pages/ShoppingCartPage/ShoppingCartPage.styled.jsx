import styled from "@emotion/styled";
import { Container } from "shared/components/Container/Container.styled";

export const ShoppingCartPageSheet = styled.section`
  padding-top: 40px;
  padding-bottom: 90px;
  display: flex;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
  }

  .cart-wrap {
  }

  .cart-wrap__title {
    display: inline-block;
    margin-bottom: 20px;
  }
  .wrapper-connect {
    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: space-between;
      gap: 15px;
    }
  }
  .wrapper-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
      position: relative;
    }
  }

  .cart-form__wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cart-form__field {
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
  }

  .cart-list {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 15px;
    }
  }

  .cart-list__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .cart__submit-wrap {
    position: fixed;
    bottom: 2%;
    right: 50%;

    @media screen and (min-width: 768px) {
      bottom: 2%;
      right: 35%;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    @media screen and (min-width: 1280px) {
      position: absolute;
      bottom: 20%;
      left: 2%;
    }
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
  @media screen and (min-width: 1280px) {
  }
`;
