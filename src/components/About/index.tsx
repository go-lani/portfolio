import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Common/CategoryTitle';
import media from '../../libs/MediaQuery';

const AboutLayout = styled.section`
  min-height: 100vh;
  padding: 100px;

  ${media.mobile`
    padding: 60px;
  `}
`;

type AboutProps = {
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, AboutProps>(function About(
  props,
  ref,
) {
  return (
    <AboutLayout ref={ref}>
      <CategoryTitle title="About me" />
    </AboutLayout>
  );
});
