import React from "react";
import { MainPageSheet } from "./MainPage.styled";
import { ContainerMain } from "shared/components/Container";

const MainPage = () => {
  return (
    <ContainerMain>
      <MainPageSheet>
        <h1 className="main-title">Glad to see you :)</h1>
      </MainPageSheet>
    </ContainerMain>
  );
};

export default MainPage;
