import styled from "@emotion/styled";
import { ContainerBase } from "./ContainerBase.styled";


export const Container = styled.div`

  padding: 0 15px;

  @media screen and (min-width: 768px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;

export const ContainerMain = styled(ContainerBase)`
  height: 100vh;
  background-image: none;
`