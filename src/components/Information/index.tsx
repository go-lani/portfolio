import React from 'react';
import styled from 'styled-components';
import A11yTitle from '../Common/A11yTitle';

const InformationLayout = styled.section`
  min-height: 100vh;
`;

export default function Information() {
  return (
    <InformationLayout>
      <h3>이철환 정보</h3>
      <div>Skills</div>
    </InformationLayout>
  );
}
