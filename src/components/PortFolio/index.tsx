import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import teamProjectData from '../../datas/teamProject.json';
import personalProjectData from '../../datas/personalProject.json';

const PortFolioLayout = styled.section`
  position: relative;
  min-height: 100vh;
`;

export default function Portfolio() {
  return (
    <PortFolioLayout>
      <h3>프로젝트</h3>
      <Project category="Team" datas={teamProjectData} />
      <Project category="Personal" datas={personalProjectData} />
    </PortFolioLayout>
  );
}
