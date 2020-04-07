import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Common/CategoryTitle';
import media from '../../libs/MediaQuery';
import skillsDatas from '../../datas/skills.json';
import SkillCategory from './SkillCategory';

const SkillLayout = styled.section`
  padding: 100px 0;

  ${media.mobile`
    padding: 30px 0;
  `}
`;

const skills = skillsDatas.filter(data => data.type === 'skill');
const etcs = skillsDatas.filter(data => data.type === 'etc');

type SkillProps = {
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, SkillProps>(function Skill(
  props,
  ref,
) {
  return (
    <SkillLayout ref={ref}>
      <CategoryTitle title="SKILLS" />
      <SkillCategory category="Skill" datas={skills} />
      <SkillCategory category="Etc." datas={etcs} />
    </SkillLayout>
  );
});
