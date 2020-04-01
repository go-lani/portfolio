import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import CategorySubTitle from '../Common/CategorySubTitle';

const SkillCategoryLayout = styled.div``;

type dataType = {
  id: number;
  type: string;
  title: string;
  level: number;
  description: string;
  logo: string;
};

type SkillCategoryProps = {
  datas: dataType[];
  category: string;
};

export default function SkillCategory({ category, datas }: SkillCategoryProps) {
  return (
    <SkillCategoryLayout>
      <CategorySubTitle>{category}</CategorySubTitle>
    </SkillCategoryLayout>
  );
}
