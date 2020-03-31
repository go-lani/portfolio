import React, { useState, createRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';
import Information from './components/Information';
import PortFolio from './components/PortFolio';
import A11yTitle from './components/Common/A11yTitle';
import Menu from './components/Menu';

const Container = styled.div<{ contentsHeight: number | undefined }>`
  position: relative;
  width: 100%;
  height: ${({ contentsHeight }) => contentsHeight && contentsHeight + 'px'};
`;

function App() {
  const [isIntro, setIsintro] = useState<boolean>(true);
  const [introHeight, setIntroHeight] = useState<number>(0);
  const [contentsHeight, setContentsHeight] = useState<number>();
  const [mainScroll, setMainScroll] = useState<number>(0);
  const [contentScroll, setContentScroll] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [infoHeight, setInfoHeight] = useState<number>(0);
  const introRef = createRef<HTMLElement>();
  const contentRef = createRef<HTMLElement>();
  const infoRef = createRef<HTMLElement>();

  useEffect(() => {
    if (contentRef && contentRef.current && introRef && introRef.current) {
      setContentsHeight(
        contentRef.current.clientHeight + introRef.current.clientHeight,
      );
    }
    if (introRef && introRef.current) {
      setIntroHeight(introRef.current.clientHeight);
    }
    if (infoRef && infoRef.current) {
      setInfoHeight(infoRef.current.clientHeight);
    }
  }, [contentsHeight, introRef, contentRef, infoRef]);

  const onScroll = useCallback((e: Event): void => {
    setMainScroll(Math.floor(window.scrollY));
  }, []);

  useEffect(() => {
    if (mainScroll >= introHeight) {
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
    setMenuActive(!menuActive);
  };

  const move = (scrolling: number) => {
    setContentScroll(scrolling);
    window.scrollTo(0, scrolling);
    setMenuActive(!menuActive);
  };

  const moveToSection = (category: string) => {
    setIsintro(false);

    if (category === 'HOME') {
      move(0);
      setIsintro(true);
    } else if (category === 'INFO') {
      move(introHeight);
    } else if (category === 'PROJECT') {
      move(introHeight + infoHeight);
    }
  };

  return (
    <>
      <Container contentsHeight={contentsHeight}>
        <A11yTitle as="h1">이철환의 포트폴리오</A11yTitle>
        <Menu
          moveToSection={moveToSection}
          menuActive={menuActive}
          menuToggle={menuToggle}
          isIntro={isIntro}
        />
        <Intro
          mainScroll={mainScroll}
          introHeight={introHeight}
          ref={introRef}
          isIntro={isIntro}
        />
        <Main ref={contentRef} contentScroll={contentScroll}>
          <Information ref={infoRef} />
          <PortFolio />
        </Main>
      </Container>
    </>
  );
}

export default App;
