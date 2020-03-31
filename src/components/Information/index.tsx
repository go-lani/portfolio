import React from 'react';
import styled from 'styled-components';

const InformationLayout = styled.section`
  min-height: 100vh;
  padding: 100px;
`;

type InformationProps = {
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, InformationProps>(
  function Information(props, ref) {
    return (
      <InformationLayout ref={ref}>
        <h3>이철환 정보</h3>
        <div>Skills</div>
      </InformationLayout>
    );
  },
);
