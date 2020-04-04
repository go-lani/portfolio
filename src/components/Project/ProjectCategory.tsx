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

type RoleType = {
  img: string | null;
  text: string;
};

type dataType = {
  id: number;
  type: string;
  title: string;
  subject: string;
  period: string;
  thumb: string;
  skills: string[];
  mock: string;
  video: string | null;
  site: string | null;
  github: string | null;
  reviews: string[];
  notice?: string;
  people?: string;
  role: RoleType[];
};

type PortFolioProps = {
  datas: dataType[];
  category: string;
  onViewDetail: (id: number) => void;
};

export default React.memo(function ProjectCategory({
  category,
  datas,
  onViewDetail,
}: PortFolioProps) {
  return (
    <ContentBox>
      <CategorySubTitle>{`${category} Project`}</CategorySubTitle>
      <ProjectList>
        {datas.map(data => (
          <ProjectItem key={uuidv4()} onViewDetail={onViewDetail} {...data} />
        ))}
      </ProjectList>
    </ContentBox>
  );
});
