import React from 'react';
import styled from 'styled-components';
import A11yTitle from '../Common/A11yTitle';

const MainLayout = styled.section`
  margin: -100vh 0 0;
  z-index: 2;
  background: red;
`;

type MainProps = {
  children: JSX.Element[];
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, MainProps>(function Main(
  { children },
  ref,
): JSX.Element {
  return (
    <MainLayout ref={ref}>
      <A11yTitle>메인 컨텐츠</A11yTitle>
      {children}
    </MainLayout>
  );
});
