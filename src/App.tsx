import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';

const Container = styled.div`
  width: 100vw;
  padding: 100vh 0 0;
`;

function App() {
  const [mainOffsetTop, setMainOffsetTop] = useState<number>();
  const MainEl = createRef<HTMLElement>();
  const onViewPortfolio = () => {};

  const onHandledWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (mainOffsetTop) {
      if (e.deltaY > 0 && window.scrollY < mainOffsetTop) {
        console.log('e.deltaY', e.deltaY);
        console.log('내림');
        console.log(mainOffsetTop);
        window.scrollTo({ top: mainOffsetTop, behavior: 'smooth' });
      } else if (e.deltaY < 0 && window.scrollY < mainOffsetTop) {
        console.log('올림');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (MainEl && MainEl.current) {
      setMainOffsetTop(MainEl.current.offsetTop);
    }
  }, [MainEl]);

  return (
    <>
      <Container onWheel={onHandledWheel}>
        <Intro onViewPortfolio={onViewPortfolio} />
        <Main ref={MainEl} />
      </Container>
    </>
  );
}

export default App;
