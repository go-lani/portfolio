import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ProjectItem from './ProjectItem';
import teamProjectData from '../../datas/teamProject.json';
import personalProjectData from '../../datas/personalProject.json';

const MainLayout = styled.section`
  display: flex;
  background: lightgray;
  position: relative;
  height: 200vh;
  z-index: 2;
`;

const ContentBox = styled.div``;

const Title = styled.p`
  font-size: 3rem;
`;

const ProjectList = styled.ul``;

type MainProps = {
  isIntro: boolean;
};

type SectionProps = React.HTMLProps<HTMLElement>;

export default React.forwardRef<HTMLElement, SectionProps>(function Main(
  props,
  ref,
) {
  return (
    <MainLayout ref={ref}>
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
});
