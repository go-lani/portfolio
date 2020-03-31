import React from 'react';
import styled from 'styled-components';
import ProjectCategory from './ProjectCategory';
import teamProjectData from '../../datas/teamProject.json';
import personalProjectData from '../../datas/personalProject.json';
import CategoryTitle from '../Common/CategoryTitle';
import media from '../../libs/MediaQuery';

const ProjectLayout = styled.section`
  min-height: 100vh;
  padding: 100px;

  ${media.mobile`
    padding: 60px;
  `}
`;

export default function Project() {
  return (
    <ProjectLayout>
      <CategoryTitle title="Project" />
      <ProjectCategory category="Team" datas={teamProjectData} />
      <ProjectCategory category="Personal" datas={personalProjectData} />
    </ProjectLayout>
  );
}
