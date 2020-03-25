import React from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';

const Container = styled.div`
  width: 100vw;
  padding: 100vh 0 0;
`;

function App() {
  const onViewPortfolio = () => {
    window.scrollTo(0, 1000);
  };

  return (
    <>
      <Container>
        <Intro onViewPortfolio={onViewPortfolio} />
        <Main />
      </Container>
    </>
  );
}

export default App;
