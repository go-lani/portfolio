import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ModalPortal from './ModalPotal';
import media from '../../libs/MediaQuery';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PopupLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  padding: 100px;

  ${media.tablet`
    padding: 60px;
  `}

  ${media.mobile`
    padding: 0;
  `}
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forward;
`;

const PopupInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #1f1f27;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  &:before {
    position: absolute;
    top: 66px;
    right: 30px;
    left: 30px;
    z-index: 2;
    content: '';
    height: 50px;
    background-color: rgba(31, 31, 39, 0);
    background-image: linear-gradient(
      0deg,
      rgba(31, 31, 39, 0) 0%,
      rgba(31, 31, 39, 1) 100%
    );
  }

  &:after {
    position: absolute;
    right: 30px;
    bottom: 30px;
    left: 30px;
    content: '';
    z-index: 2;
    height: 50px;
    background-color: rgba(31, 31, 39, 0);
    background-image: linear-gradient(
      0deg,
      rgba(31, 31, 39, 1) 0%,
      rgba(31, 31, 39, 0) 100%
    );
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 3rem;
  color: #fff;
`;

const CloseButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  text-indent: -9999em;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  ${media.mobile`
    width: 20px;
    height: 20px;
  `}
`;

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  max-height: calc(100% - 60px);
  color: #fff;
  padding: 30px 0;

  ${media.desktop`
    padding: 30px 10px;
  `}
`;

type PopupProps = {
  children: JSX.Element[] | JSX.Element | string;
  onHidePopup: () => void;
};

export default function Popup({ children, onHidePopup }: PopupProps) {
  useEffect(() => {
    const $body = document.querySelector('body');
    if ($body) $body.style.overflow = 'hidden';

    return () => {
      if ($body) $body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalPortal>
      <PopupLayout>
        <Dim onClick={onHidePopup} />
        <PopupInner>
          <Header>
            <Title>프로젝트 상세보기</Title>
            <CloseButton onClick={onHidePopup}>닫기</CloseButton>
          </Header>
          <Content>{children}</Content>
        </PopupInner>
      </PopupLayout>
    </ModalPortal>
  );
}
