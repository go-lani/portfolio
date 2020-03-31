import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Common/CategoryTitle';
import media from '../../libs/MediaQuery';

const SkillLayout = styled.section`
  min-height: 100vh;
  padding: 100px;

  ${media.mobile`
    padding: 60px;
  `}
`;

type SkillProps = {
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, SkillProps>(function Skill(
  props,
  ref,
) {
  return (
    <SkillLayout ref={ref}>
      <CategoryTitle title="SKILL" />
    </SkillLayout>
  );
});
