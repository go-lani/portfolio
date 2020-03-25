import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import media from '../../libs/MediaQuery';

type TypingType = {
  text: string;
  subject: string;
};

const pointer = keyframes`
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
`;

const writing = keyframes`
  to {
    width: 0;
    opacity: 1;
  }
  from {
    opacity: 1;
  }
`;

const TypingText = styled.p<{ subject: string }>`
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  border-width: 0 2px 0 0;
  border-style: solid;
  font-size: 4rem;
  opacity: 0;

  & + & {
    margin: 20px 0 0;
  }

  ${media.desktop`
    font-size: 5rem;
  `}

  ${({ subject }) =>
    subject === 'greeting'
      ? css`
          animation: 2s ${writing} steps(22) 1 forwards reverse,
            3s ${pointer} steps(22) 1 forwards;
          ${media.desktop`
            width: 250px;
          `}

          ${media.tablet`
            width: 200px;
          `}

          ${media.mobile`
            width: 165px;
          `}
        `
      : subject === 'job'
      ? css`
          animation: 2s ${writing} steps(22) 3s 1 forwards reverse,
            3s ${pointer} steps(22) 3s 1 forwards;
          ${media.desktop`
            width: 385px;
          `}

          ${media.tablet`
            width: 310px;
          `}

          ${media.mobile`
            width: 250px;
          `}
        `
      : css`
          animation: 2s ${writing} steps(22) 6s 1 forwards reverse,
            1s ${pointer} steps(22) 6s infinite forwards;
          ${media.desktop`
            width: 300px;
          `}

          ${media.tablet`
            width: 240px;
          `}

          ${media.mobile`
            width: 200px;
          `}
        `}
  }
`;

export default function Typing({ text, subject }: TypingType) {
  return (
    <>
      <TypingText subject={subject}>{text}</TypingText>
    </>
  );
}
