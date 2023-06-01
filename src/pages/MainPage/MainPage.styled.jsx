import styled from "@emotion/styled";

export const MainPageSheet = styled.section`
  .main-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 15px 25px;

    border-radius: 15px 25px;
    background-color: #ff6314;
    color: #fff;

    transition: color 250ms linear, background-color 250ms linear,
      border-radius 250ms linear;

    &:hover {
      border-radius: 25px 15px;
      background-color: #fff;
      color: #000;
    }
  }
`;