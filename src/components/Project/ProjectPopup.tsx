import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
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
  people?: string;
  role: RoleType[];
};

type PopupProps = {
  onHidePopup: () => void;
  selectProject: dataType;
};

const MockImg = styled.div<{ loaded: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px;
  min-height: 250px;

  img {
    width: 50px;
  }

  ${media.tablet`
    min-height: 250px;
  `}

  ${media.mobile`
    min-height: 85px;

    img {
      width: 40px;
    }
  `}

  .mock-img {
    display: none;
    width: 100%;
  }

  ${({ loaded }) =>
    loaded &&
    css`
      .mock-img {
        display: block;
      }
    `}
`;

const ViewArea = styled.div`
  margin: 0 0 30px;
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

const Summary = styled.div`
  margin: 0 0 30px;
  padding: 0 0 30px;
  border-bottom: 2px dotted #424242;
`;

const Title = styled.p`
  margin: 0 0 10px;

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
  font-size: 1.8rem;
  line-height: 1.5;
  word-break: keep-all;
`;

const DetailList = styled.ul``;

const Detail = styled.li`
  display: flex;
  margin: 0 0 40px;

  &:last-child {
    margin: 0;
  }
`;

const DetailTitle = styled.p`
  width: 200px;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.5;
`;

const DetailContent = styled.div`
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.5;
`;

const DetailText = styled.p`
  word-break: keep-all;
  margin: 0 0 10px;

  &:last-child {
    margin: 0;
  }
`;

const SkillList = styled.ul`
  overflow: hidden;
  margin: 0 0 -10px;
`;

const SkillItem = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  background: #e63f65;
  border-radius: 2px;

  &.alpha {
    margin: 0 0 10px;
    padding: 0;
    background: none;
    line-height: 34px;
  }
`;

const RoleList = styled.ul``;

const RoleItem = styled.li`
  margin: 0 0 25px;

  &:last-child {
    margin: 0;
  }
`;

const RoleItemImgBox = styled.div`
  overflow: hidden;
  margin: 15px 0 0;
  background: #232222;
  padding: 10px;
  border-radius: 5px;

  img {
    max-width: 100%;
  }
`;
const RoleItemText = styled.p`
  word-break: keep-all;
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
    people,
    notice,
  } = selectProject;

  const [loading, setLoading] = useState<boolean>(true);
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>();

  const onShowPlayer = (url: string) => {
    setPlayVideo(true);
    setVideoUrl(url);
  };

  const onHidePlayer = () => {
    setPlayVideo(false);
  };

  const onLoadImage = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      <Popup onHidePopup={onHidePopup}>
        <MockImg loaded={!loading}>
          {loading && <img src="./images/spinner.gif" alt="" />}
          <img src={mock} onLoad={onLoadImage} className="mock-img" alt="" />
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
        <Summary>
          <Title>
            <em>{title}</em>
          </Title>
          <SubjectText>{subject}</SubjectText>
        </Summary>
        <DetailList>
          {people && (
            <Detail>
              <DetailTitle>참여 인원</DetailTitle>
              <DetailContent>
                <DetailText>{people}</DetailText>
              </DetailContent>
            </Detail>
          )}
          <Detail>
            <DetailTitle>작업 기간</DetailTitle>
            <DetailContent>
              <DetailText>{period}</DetailText>
            </DetailContent>
          </Detail>
          <Detail>
            <DetailTitle>사용 기술</DetailTitle>
            <DetailContent>
              <SkillList>
                {skills &&
                  skills.map(skill => (
                    <SkillItem key={uuidv4()}>{skill}</SkillItem>
                  ))}
                <SkillItem className="alpha">+ α</SkillItem>
              </SkillList>
            </DetailContent>
          </Detail>
          <Detail>
            <DetailTitle>
              맡은 역할 및<br />
              구현항목
            </DetailTitle>
            <DetailContent>
              <RoleList>
                {role.map(r => (
                  <RoleItem key={uuidv4()}>
                    <RoleItemText>{r.text}</RoleItemText>
                    {r.img && (
                      <RoleItemImgBox>
                        <img src={r.img} alt="" />
                      </RoleItemImgBox>
                    )}
                  </RoleItem>
                ))}
              </RoleList>
            </DetailContent>
          </Detail>
          <Detail>
            <DetailTitle>
              프로젝트를 통해
              <br />
              느낀점
            </DetailTitle>
            <DetailContent>
              {reviews &&
                reviews.map(review => (
                  <DetailText key={uuidv4()}>{review}</DetailText>
                ))}
            </DetailContent>
          </Detail>
        </DetailList>
      </Popup>
      {playVideo && videoUrl && title && (
        <Player url={videoUrl} title={title} onHidePlayer={onHidePlayer} />
      )}
    </>
  );
}
