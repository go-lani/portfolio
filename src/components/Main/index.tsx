import React from 'react';
import styled, { css } from 'styled-components';

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

const ProjectItem = styled.li`
  width: 300px;

  &:nth-child(odd) {
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-self: flex-end;
  }
`;

type MainProps = {
  isIntro: boolean;
};

export default function Main({ isIntro }: MainProps) {
  return (
    <MainLayout isIntro={isIntro}>
      <ContentBox>
        <Title>TEAM Project</Title>
        <ProjectList>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
        </ProjectList>
      </ContentBox>
      <ContentBox>
        <Title>개인 Project</Title>
        <ProjectList>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
          <ProjectItem>1</ProjectItem>
        </ProjectList>
      </ContentBox>
    </MainLayout>
  );
}
