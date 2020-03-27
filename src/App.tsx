import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';
import Information from './components/Information';
import PortFolio from './components/PortFolio';

const Container = styled.div`
  width: 100vw;
  padding: 100vh 0 0;
`;

function App() {
  const [mainOffsetTop, setMainOffsetTop] = useState<number>();
  const mainRef = createRef<HTMLElement>();

  const onViewPortfolio = () => {
    window.scrollTo({ top: mainOffsetTop, behavior: 'smooth' });
  };

  useEffect(() => {
    if (mainRef && mainRef.current) {
      setMainOffsetTop(mainRef.current.offsetTop);
    }
  }, [mainRef]);

  return (
    <>
      <Container>
        <Intro onViewPortfolio={onViewPortfolio} />
        <Main ref={mainRef}>
          <Information />
          <PortFolio />
        </Main>
      </Container>
    </>
  );
}

export default App;
