import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import media from '../../libs/MediaQuery';
import ModalPortal from '../Popup/ModalPotal';

const show = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const PlayerLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  background: #000;
  padding: 0 12%;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${show};
  animation-fill-mode: forward;

  ${media.tablet`
    padding: 60px 0;
  `}

  ${media.mobile`
    padding: 60px 0;
  `}
`;

const Player = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  height: 0 !important;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
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

type PlayerProps = {
  url: string;
  title: string;
  onHidePlayer: () => void;
};

export default function Popup({ url, title, onHidePlayer }: PlayerProps) {
  return (
    <ModalPortal>
      <PlayerLayout>
        <CloseButton onClick={onHidePlayer}>닫기</CloseButton>
        <Player>
          <iframe
            src={`${url}?rel=0&vq=hd1080`}
            frameBorder="0"
            allowFullScreen
            title={`${title} 구현 동영상`}
          ></iframe>
        </Player>
      </PlayerLayout>
    </ModalPortal>
  );
}
