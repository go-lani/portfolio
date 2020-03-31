import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ProjectItem from './ProjectItem';

const ContentBox = styled.div``;

const Title = styled.p`
  font-size: 3.5rem;
  color: #fff;
  opacity: 0.5;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

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
      <Title>{category} Project</Title>
      <ProjectList>
        {datas.map(data => (
          <ProjectItem key={uuidv4()} {...data} />
        ))}
      </ProjectList>
    </ContentBox>
  );
}
