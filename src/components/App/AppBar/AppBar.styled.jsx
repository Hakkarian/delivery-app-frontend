import styled from "@emotion/styled";

export const AppBarSheet = styled.header`
  padding: 5px;
  padding-left: 25px;

  display: flex;
  align-items: center;
  gap: 20px;

  background-color: #ff9312;
  color: #000;
  backdrop-filter: blur(10px);

  .logo {
    padding: 0;
    background-color: transparent;
    border-radius: 25px 15px;

    &:hover,
    &:focus {
      color: #fff;
      background-color: #fff;
    }
  }

  a {
    padding: 15px 20px;
    color: #000;
    background-color: #fff;

    border-radius: 10px;

    transition: color 250ms linear, background-color 250ms linear,
      border-radius 250ms linear;

    &:hover,
    &:focus {
      color: #fff;
      background-color: #000;
    }
  }
`;