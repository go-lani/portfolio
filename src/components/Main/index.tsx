import React from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import teamProjectData from '../../data/teamProject.json';
import personalProjectData from '../../data/personalProject.json';
import ProjectItem from './ProjectItem';

interface MainStyleProps {
  readonly isIntro: boolean;
}

const MainLayout = styled.section<MainStyleProps>`
  display: flex;
  flex: 1 0 auto;
  background: lightgray;
  padding: 150px 0 60px 360px;
  transform: translateX(0);
  transition: all 0.3s linear;

  ${props =>
    !props.isIntro &&
    css`
      transform: translateX(calc(-100vw));
    `};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 3rem;
`;

const ProjectList = styled.ul`
  display: flex;
  height: 80%;

  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

type MainProps = {
  isIntro: boolean;
};

export default function Main({ isIntro }: MainProps) {
  console.log(teamProjectData);
  return (
    <MainLayout isIntro={isIntro}>
      <ContentBox>
        <Title>TEAM Project</Title>
        <ProjectList>
          {teamProjectData.map(data => (
            <ProjectItem key={uuidv4()} {...data} />
          ))}
        </ProjectList>
      </ContentBox>
      <ContentBox>
        <Title>Personal Project</Title>
        <ProjectList>
          {personalProjectData.map(data => (
            <ProjectItem key={uuidv4()} {...data} />
          ))}
        </ProjectList>
      </ContentBox>
    </MainLayout>
  );
}
