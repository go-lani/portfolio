import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ProjectItem from './ProjectItem';

const ContentBox = styled.div``;

const Title = styled.p`
  font-size: 3rem;
`;

const ProjectList = styled.ul``;

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

export default function Project({ category, datas }: PortFolioProps) {
  return (
    <ContentBox>
      <Title>{category} Project</Title>
      <ProjectList>
        {datas.map(data => (
          <ProjectItem key={uuidv4()} {...data} />
        ))}
      </ProjectList>
    </ContentBox>
  );
}
