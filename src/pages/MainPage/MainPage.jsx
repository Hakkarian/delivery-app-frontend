import React from 'react'
import { MainPageSheet } from './MainPage.styled'
import { Container } from 'shared/components/Container.styled';

const MainPage = () => {
  return (
    <Container>
      <MainPageSheet>
        <h1 className="main-title">Glad to see you :)</h1>
      </MainPageSheet>
    </Container>
  );
}

export default MainPage