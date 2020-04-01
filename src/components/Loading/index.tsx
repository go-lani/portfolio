import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const hideLoader = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-110%);
  }
`;

const LoadingLayout = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  width: 100%;
  height: 100%;
  background: #1b1817;
  ${({ active }) =>
    !active &&
    css`
      animation: 0.5s ${hideLoader} 0.5s 1 forwards;
    `}
`;

const Shadow = styled.div<{ active: boolean }>`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: #1f1f1f;
  ${({ active }) =>
    !active &&
    css`
      animation: 0.5s ${hideLoader} 0.6s 1 forwards;
    `}
`;

const showText = keyframes`
  0% {
    top: calc(50% + 20px);
    opacity: 0;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
`;

const hideText = keyframes`
  0% {
    top: 50%;
    opacity: 1;
  }
  100% {
    top: calc(50% + 20px);
    opacity: 0;
  }
`;

const First = styled.p`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 320px;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: #fff;
  animation: 0.5s ${hideText} 0.8s ease-in-out 1 forwards;
`;

const Second = styled(First)`
  opacity: 0;
  top: calc(50% + 20px);
  animation: 0.5s ${showText} 1.2s ease-in-out 1 forwards;
`;

type LoadingProps = {
  loading: boolean;
};

export default function Loading({ loading }: LoadingProps) {
  return (
    <div>
      <LoadingLayout active={loading}>
        <First>Lee Cheol Hwan</First>
        <Second>PortFolio</Second>
      </LoadingLayout>
      <Shadow active={loading} />
    </div>
  );
}
