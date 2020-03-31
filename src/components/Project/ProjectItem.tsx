import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  width: 300px;

  &:nth-child(odd) {
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-self: flex-end;
  }
`;

type ProjectItemProps = {
  id: number;
  title: string;
  description: string;
  period: string;
};

export default function ProjectItem({
  id,
  title,
  description,
  period,
}: ProjectItemProps) {
  return <Item>{title}</Item>;
}
