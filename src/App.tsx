import React, { useState, createRef, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';
import Information from './components/Information';
import PortFolio from './components/PortFolio';
import A11yTitle from './components/Common/A11yTitle';
import Menu from './components/Menu';

const Container = styled.div<{ contentsHeight: number | undefined }>`
  position: relative;
  width: 100vw;
  height: ${({ contentsHeight }) => contentsHeight && contentsHeight + 'px'};
`;

function App() {
  const [isIntro, setIsintro] = useState<boolean>(true);
  const [introHeight, setIntroHeight] = useState<number>(0);
  const [contentsHeight, setContentsHeight] = useState<number>();
  const [mainScroll, setMainScroll] = useState<number>(0);
  const [contentScroll, setContentScroll] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<boolean>(false);
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
    setMainScroll(Math.floor(window.scrollY));
  }, []);

  useEffect(() => {
    if (mainScroll > introHeight) {
      setIsintro(false);
      setContentScroll(mainScroll - introHeight);
    } else {
      setIsintro(true);
      setContentScroll(0);
    }
  }, [mainScroll, introHeight]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const menuToggle = () => {
    // setIsintro(false);
    // setMainScroll(introHeight);
    // window.scrollTo(0, introHeight);
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Container contentsHeight={contentsHeight}>
        <A11yTitle as="h1">이철환의 포트폴리오</A11yTitle>
        <Menu menuActive={menuActive} menuToggle={menuToggle} />
        <Intro
          mainScroll={mainScroll}
          introHeight={introHeight}
          ref={introRef}
          isIntro={isIntro}
        />
        <Main ref={mainRef} contentScroll={contentScroll}>
          <Information />
          <PortFolio />
        </Main>
      </Container>
    </>
  );
}

export default App;
