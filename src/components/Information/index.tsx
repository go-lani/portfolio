import React from 'react';
import styled from 'styled-components';

const InformationLayout = styled.section`
  min-height: 100vh;
  padding: 100px;
`;

export default function Information() {
  return (
    <InformationLayout>
      <h3>이철환 정보</h3>
      <div>Skills</div>
    </InformationLayout>
  );
}
