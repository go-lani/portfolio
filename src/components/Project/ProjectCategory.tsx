import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ProjectItem from './ProjectItem';
import CategorySubTitle from '../Common/CategorySubTitle';

const ContentBox = styled.div``;

const ProjectList = styled.ul`
  font-size: 1.4rem;
  color: #222;
`;

type dataType = {
  id: number;
  title: string;
  description: string;
  period: string;
};

type PortFolioProps = {
  datas: dataType[];
  category: string;
};

export default function ProjectCategory({ category, datas }: PortFolioProps) {
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
}
