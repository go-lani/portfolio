import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import CategorySubTitle from '../Common/CategorySubTitle';
import SkillItem from './SkillItem';

const SkillCategoryLayout = styled.div`
  margin: 0 0 50px;

  &:last-child {
    margin: 0;
  }
`;

const SkillList = styled.ul`
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

type dataType = {
  id: number;
  type: string;
  title: string;
  level: number;
  description: string;
  logo: string;
  color: string;
};

type SkillCategoryProps = {
  datas: dataType[];
  category: string;
};

export default React.memo(function SkillCategory({
  category,
  datas,
}: SkillCategoryProps) {
  return (
    <SkillCategoryLayout>
      <CategorySubTitle>{category}</CategorySubTitle>
      <SkillList>
        {datas.map(data => (
          <SkillItem key={uuidv4()} {...data} />
        ))}
      </SkillList>
    </SkillCategoryLayout>
  );
});
