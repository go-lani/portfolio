import React from 'react';
import styled from 'styled-components';
import ProjectCategory from './ProjectCategory';
import projectDatas from '../../datas/project.json';
import CategoryTitle from '../Common/CategoryTitle';
import media from '../../libs/MediaQuery';
import Popup from '../Popup';

const ProjectLayout = styled.section`
  padding: 100px 0;

  ${media.mobile`
    padding: 50px 0;
  `}
`;

const teamProjectDatas = projectDatas.filter(data => data.type === 'team');
const personalProjectDatas = projectDatas.filter(
  data => data.type === 'personal',
);

export default function Project() {
  return (
    <ProjectLayout>
      <CategoryTitle title="Project" />
      <ProjectCategory category="Team" datas={teamProjectDatas} />
      <ProjectCategory category="Personal" datas={personalProjectDatas} />
      <Popup />
    </ProjectLayout>
  );
}
