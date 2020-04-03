import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';
import Popup from '../Popup';
import Player from '../Player';

type RoleType = {
  img: string | null;
  text: string;
};

type dataType = {
  id: number;
  type: string;
  title: string;
  subject: string;
  period: string;
  thumb: string;
  skills: string[];
  mock: string;
  video: string | null;
  site: string | null;
  github: string | null;
  reviews: string[];
  notice?: string;
  role: RoleType[];
};

type PopupProps = {
  onHidePopup: () => void;
  selectProject: dataType;
};

const MockImg = styled.div`
  margin: 0 0 20px;
  img {
    width: 100%;
  }
`;

const ViewArea = styled.div`
  margin: 0 0 20px;
`;

const Viewer = styled.div`
  display: flex;
  align-items: center;
`;

const ViewerTitle = styled.p`
  font-size: 1.8rem;
  margin: 0 20px 0 0;
`;

const ViewerList = styled.ul`
  overflow: hidden;
`;

const ViewerItem = styled.li`
  float: left;

  & + & {
    margin: 0 0 0 10px;
  }
  a,
  button {
    display: block;
    min-width: 50px;
    font-size: 1.8rem;
    padding: 5px 10px;
    background: #2a55d6;
    border-radius: 2px;
    text-align: center;
    transition: all 0.3s;

    &:hover {
      background: #1b3584;
    }

    ${media.mobile`
      font-size: 1.6rem;
    `}
  }
`;

const Notice = styled.p`
  margin: 5px 0 0;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #ff2d54;
`;

const Detail = styled.div``;

const Title = styled.p`
  margin: 0 0 5px;
  em {
    display: inline-block;
    position: relative;
    font-size: 3rem;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      height: 10px;
      background: #30adad;
      content: '';
    }
  }
`;

const SubjectText = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  word-break: keep-all;

  ${media.mobile`
    font-size: 1.4rem;
  `}
`;

export default function ProjectPopup({
  selectProject,
  onHidePopup,
}: PopupProps) {
  const {
    title,
    subject,
    period,
    skills,
    mock,
    site,
    video,
    github,
    reviews,
    role,
    notice,
  } = selectProject;

  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>();

  const onShowPlayer = (url: string) => {
    setPlayVideo(true);
    setVideoUrl(url);
  };

  const onHidePlayer = () => {
    setPlayVideo(false);
  };

  return (
    <>
      <Popup onHidePopup={onHidePopup}>
        <MockImg>
          <img src={mock} alt="" />
        </MockImg>
        <ViewArea>
          <Viewer>
            <ViewerTitle>바로가기</ViewerTitle>
            <ViewerList>
              {site && (
                <ViewerItem>
                  <a href={site} target="_blank" rel="noopener noreferrer">
                    Site
                  </a>
                </ViewerItem>
              )}
              {github && (
                <ViewerItem>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </ViewerItem>
              )}
              {video && (
                <ViewerItem>
                  <button type="button" onClick={() => onShowPlayer(video)}>
                    Video
                  </button>
                </ViewerItem>
              )}
            </ViewerList>
          </Viewer>
          {notice && <Notice>※ {notice}</Notice>}
        </ViewArea>
        <Detail>
          <Title>
            <em>{title}</em>
          </Title>
          <SubjectText>{subject}</SubjectText>
        </Detail>
      </Popup>
      {playVideo && videoUrl && title && (
        <Player url={videoUrl} title={title} onHidePlayer={onHidePlayer} />
      )}
    </>
  );
}
