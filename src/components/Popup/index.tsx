import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPotal';
import media from '../../libs/MediaQuery';

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
  background: rgba(0, 0, 0, 0.8);

  ${media.mobile`
    display: none;
  `}
`;

const PopupInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #fff;

  ${media.mobile`
    height: 100%;
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 3rem;
`;

const CloseButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  text-indent: -9999em;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 100%;
    height: 3px;
    background: #000;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 100%;
    height: 3px;
    background: #000;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  max-height: calc(100% - 60px);
`;

type dataType = {
  id: number;
  title: string;
  description: string;
  period: string;
  thumb: string;
  skills: string[];
};

type PopupProps = {
  visible: boolean;
  onHidePopup: () => void;
  selectProject: dataType | null;
};

export default function Popup({
  visible,
  selectProject,
  onHidePopup,
}: PopupProps) {
  useEffect(() => {
    const $body = document.querySelector('body');
    if ($body) $body.style.overflow = 'hidden';

    return () => {
      if ($body) $body.style.overflow = 'auto';
    };
  }, []);

  console.log(selectProject);

  return (
    <ModalPortal>
      <PopupLayout>
        <Dim onClick={onHidePopup} />
        <PopupInner>
          <Header>
            <Title>프로젝트 상세보기</Title>
            <CloseButton onClick={onHidePopup}>닫기</CloseButton>
          </Header>
          <Content>
            {selectProject && selectProject.id}
            {selectProject && selectProject.title}
            {selectProject && selectProject.description}
            {selectProject && selectProject.period}
            {selectProject && selectProject.skills}
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
            줄바꿈
            <br />
          </Content>
        </PopupInner>
      </PopupLayout>
    </ModalPortal>
  );
}
