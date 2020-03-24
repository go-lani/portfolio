import React from 'react';
import styled, { css } from 'styled-components';
import Typing from '../Common/Typing';

interface IntroStyleProps {
  readonly isIntro: boolean;
}

const IntroLayout = styled.section<IntroStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: skyblue;
  transform: translateX(0);
  transition: all 0.3s linear;

  ${props =>
    !props.isIntro &&
    css`
      transform: translateX(calc(-100vw + 300px));
    `};
`;

const IntroInner = styled.div`
  background: pink;
`;

type IntroProps = {
  isIntro: boolean;
  onViewPortfolio: () => void;
};

export default function Intro({ isIntro, onViewPortfolio }: IntroProps) {
  return (
    <IntroLayout isIntro={isIntro}>
      <IntroInner>
        <Typing text="안녕하세요! 이철환입니다." speed={2000} />
        <button
          style={{ position: 'fixed', top: '0', right: 0 }}
          onClick={onViewPortfolio}
        >
          자세히 보기
        </button>
      </IntroInner>
    </IntroLayout>
  );
}
