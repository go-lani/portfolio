import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ProjectItem from './ProjectItem';
import CategorySubTitle from '../Common/CategorySubTitle';

const ContentBox = styled.div`
  margin: 0 0 100px;

  &:last-child {
    margin: 0;
  }
`;

const ProjectList = styled.ul`
  max-width: 1200px;
  font-size: 1.4rem;
  color: #222;
  margin: 0 auto;

  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

type dataType = {
  id: number;
  title: string;
  description: string;
  period: string;
  thumb: string;
};

type PortFolioProps = {
  datas: dataType[];
  category: string;
};

export default React.memo(function ProjectCategory({
  category,
  datas,
}: PortFolioProps) {
  return (
    <ContentBox>
      <CategorySubTitle>{`${category} Project`}</CategorySubTitle>
      <ProjectList>
        {datas.map(data => (
          <ProjectItem key={uuidv4()} {...data} />
        ))}
      </ProjectList>
    </ContentBox>
  );
});
