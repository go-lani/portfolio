import React, { useState, createRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Main from './components/Main';
import Information from './components/Information';
import Project from './components/Project';
import Skill from './components/Skill';
import Menu from './components/Menu';
import A11yTitle from './components/Common/A11yTitle';
import Loading from './components/Loading';

const Container = styled.div<{ contentsHeight: number | undefined }>`
  position: relative;
  width: 100%;
  height: ${({ contentsHeight }) => contentsHeight && contentsHeight + 'px'};
`;

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [isIntro, setIsintro] = useState<boolean>(true);
  const [mainScroll, setMainScroll] = useState<number>(0);
  const [contentScroll, setContentScroll] = useState<number>(0);
  const [introHeight, setIntroHeight] = useState<number>(0);
  const [contentsHeight, setContentsHeight] = useState<number>();
  const [infoHeight, setInfoHeight] = useState<number>(0);
  const [skillHeight, setSkillHeight] = useState<number>(0);
  const introRef = createRef<HTMLElement>();
  const contentRef = createRef<HTMLElement>();
  const infoRef = createRef<HTMLElement>();
  const skillRef = createRef<HTMLElement>();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1700);
  }, []);

  useEffect(() => {
    if (contentRef && contentRef.current && introRef && introRef.current) {
      setContentsHeight(
        contentRef.current.clientHeight + introRef.current.clientHeight,
      );
    }
    if (introRef && introRef.current)
      setIntroHeight(introRef.current.clientHeight);
    if (infoRef && infoRef.current) setInfoHeight(infoRef.current.clientHeight);
    if (skillRef && skillRef.current)
      setSkillHeight(skillRef.current.clientHeight);
  }, [contentsHeight, introRef, contentRef, infoRef, skillRef]);

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
    } else if (category === 'SKILL') {
      move(introHeight + infoHeight);
    } else if (category === 'PROJECT') {
      move(introHeight + infoHeight + skillHeight);
    }
  };

  return (
    <>
      <Loading loading={loading} />
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
          <Skill ref={skillRef} />
          <Project />
        </Main>
      </Container>
    </>
  );
}

export default App;
