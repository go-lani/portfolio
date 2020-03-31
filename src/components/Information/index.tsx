import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Common/CategoryTitle';
import media from '../../libs/MediaQuery';

const InformationLayout = styled.section`
  min-height: 100vh;
  padding: 100px;

  ${media.mobile`
    padding: 60px;
  `}
`;

type InformationProps = {
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, InformationProps>(
  function Information(props, ref) {
    return (
      <InformationLayout ref={ref}>
        <CategoryTitle title="INFOMATION" />
      </InformationLayout>
    );
  },
);
