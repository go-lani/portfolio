import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

type TypingType = {
  text: string;
  speed: number;
};

const pointer = keyframes`
  0%, 100% {
    background: transparent;
  }
  50% {
    background: #fff;
  }
`;

const TypingText = styled.p`
  display: inline-block;
  position: relative;
  font-size: 6rem;

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: #fff;
    content: '';
    animation: ${pointer} 1s linear infinite;
  }
`;

export default function Typing({ text, speed }: TypingType) {
  const [typing, setTyping] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== text.length) {
      setTimeout(() => {
        setTyping(prev => text.slice(0, count));
        setCount(count => count + 1);
      }, Math.floor(speed / text.length));
    }
  }, [count, speed, text]);

  return (
    <>
      <TypingText>{typing}</TypingText>
    </>
  );
}
