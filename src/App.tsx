import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';

interface ContainerTypes {
  isIntro: boolean;
}

const Container = styled.div<ContainerTypes>`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
  ${props =>
    props.isIntro
      ? css`
          overflow-x: hidden;
        `
      : css`
          width: auto;
          overflow-x: auto;
        `}
`;

function App() {
  const [isIntro, setIsintro] = useState(true);

  const onViewPortfolio = () => setIsintro(false);

  return (
    <>
      <Container isIntro={isIntro}>
        <Intro isIntro={isIntro} onViewPortfolio={onViewPortfolio} />
        <Main isIntro={isIntro} />
      </Container>
    </>
  );
}

export default App;
