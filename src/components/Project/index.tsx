import React, { useState, useEffect } from 'react';
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

type ProjectData = {
  id: number;
  type: string;
  title: string;
  description: string;
  period: string;
  thumb: string;
  skills: string[];
};

export default function Project() {
  const [selectProject, setSelectProject] = useState<ProjectData | null>(null);
  const [detailVisible, setDetailVisible] = useState<boolean>(false);

  const onViewDetail = (id: number) => {
    const selectData = projectDatas.find(data => data.id === id);
    if (selectData) setSelectProject(selectData);
    setDetailVisible(true);
  };

  useEffect(() => {
    console.log('먼저? selectProject', selectProject);
  }, [selectProject]);

  useEffect(() => {
    console.log('먼저? detailVisible', detailVisible);
  }, [detailVisible]);

  const onHidePopup = () => {
    setDetailVisible(false);
    setSelectProject(null);
  };

  return (
    <ProjectLayout>
      <CategoryTitle title="Project" />
      <ProjectCategory
        category="Team"
        onViewDetail={onViewDetail}
        datas={teamProjectDatas}
      />
      <ProjectCategory
        category="Personal"
        onViewDetail={onViewDetail}
        datas={personalProjectDatas}
      />
      {detailVisible && (
        <Popup
          visible={detailVisible}
          selectProject={selectProject}
          onHidePopup={onHidePopup}
        />
      )}
    </ProjectLayout>
  );
}
