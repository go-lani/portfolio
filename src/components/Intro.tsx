import React from 'react';
import styled from 'styled-components';

interface IntroStyleProps {
  readonly isIntro: boolean;
}

const IntroLayout = styled.section<IntroStyleProps>`
  display: ${props => (props.isIntro ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: skyblue;
`;

type IntroProps = {
  isIntro: boolean;
  onViewPortfolio: () => void;
};

export default function Intro({ isIntro, onViewPortfolio }: IntroProps) {
  console.log(isIntro);
  return (
    <IntroLayout isIntro={isIntro}>
      <div>intro</div>
      <button onClick={onViewPortfolio}>자세히 보기</button>
    </IntroLayout>
  );
}
