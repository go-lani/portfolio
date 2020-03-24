import React from 'react';
import styled, { css } from 'styled-components';

interface MainStyleProps {
  readonly isIntro: boolean;
}

const MainLayout = styled.section<MainStyleProps>`
  display: flex;
  flex: 1 0 auto;
  background: lightgray;
  padding: 0 0 0 300px;
  width: 200vw;
  transform: translateX(0);
  transition: all 0.3s linear;

  ${props =>
    !props.isIntro &&
    css`
      transform: translateX(calc(-100vw));
    `};
`;

type MainProps = {
  isIntro: boolean;
};

export default function Main({ isIntro }: MainProps) {
  return <MainLayout isIntro={isIntro}>hello world</MainLayout>;
}
