import React from 'react';
import styled from 'styled-components';
import Typing from '../Common/Typing';
import media from '../../libs/MediaQuery';

const IntroLayout = styled.section`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: #000;
  padding: 200px;

  ${media.tablet`
    padding: 100px;
  `}

  ${media.mobile`
    padding: 60px;
  `}
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  color: #fff;

  ${media.desktop`
    min-width: 500px;
  `}

  ${media.tablet`
    min-width: 350px;
  `}
`;

type IntroProps = {
  onViewPortfolio: () => void;
};

export default function Intro({ onViewPortfolio }: IntroProps) {
  return (
    <IntroLayout>
      <Greeting>
        <Typing subject="greeting" text="안녕하세요!" />
        <Typing subject="job" text="프론트엔드 개발자" />
        <Typing subject="information" text="이철환입니다." />
      </Greeting>

      <button
        style={{ position: 'fixed', top: '0', right: 0 }}
        onClick={onViewPortfolio}
      >
        자세히 보기
      </button>
    </IntroLayout>
  );
}
