import React, { useState, createRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';
import Information from './components/Information';
import PortFolio from './components/PortFolio';
import A11yTitle from './components/Common/A11yTitle';

const Container = styled.div<{ contentsHeight: number | undefined }>`
  position: relative;
  width: 100vw;
  height: ${({ contentsHeight }) => contentsHeight && contentsHeight + 'px'};
`;

function App() {
  const [isIntro, setIsintro] = useState<boolean>(true);
  const [introHeight, setIntroHeight] = useState<number>(0);
  const [contentsHeight, setContentsHeight] = useState<number>();
  const [introOffset, setIntroOffset] = useState<number>(0);
  const [mainOffset, setMainOffset] = useState<number>(0);
  const mainRef = createRef<HTMLElement>();
  const introRef = createRef<HTMLElement>();

  useEffect(() => {
    if (mainRef && mainRef.current && introRef && introRef.current) {
      setContentsHeight(
        mainRef.current.clientHeight + introRef.current.clientHeight,
      );
      setIntroHeight(introRef.current.clientHeight);
    }
  }, [contentsHeight, introRef, mainRef]);

  const onScroll = useCallback((e: Event): void => {
    setIntroOffset(Math.floor(window.scrollY));
  }, []);

  useEffect(() => {
    if (introOffset > introHeight) {
      setIsintro(false);
      setMainOffset(introOffset - introHeight);
    } else {
      setIsintro(true);
      setMainOffset(0);
    }
  }, [introOffset, introHeight]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <Container contentsHeight={contentsHeight}>
        <A11yTitle as="h1">이철환의 포트폴리오</A11yTitle>
        <Intro
          introOffset={introOffset}
          introHeight={introHeight}
          ref={introRef}
          isIntro={isIntro}
        />
        <Main ref={mainRef} mainOffset={mainOffset}>
          <Information />
          <PortFolio />
        </Main>
      </Container>
    </>
  );
}

export default App;
