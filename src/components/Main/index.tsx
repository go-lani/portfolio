import React from 'react';
import styled from 'styled-components';
import A11yTitle from '../Common/A11yTitle';

const MainLayout = styled.section`
  position: relative;
  z-index: 2;
  background: red;
`;

type MainProps = {
  children: JSX.Element[];
  ref: React.HTMLProps<HTMLElement>;
};

export default React.forwardRef<HTMLElement, MainProps>(function Main({
  ref,
  children,
}): JSX.Element {
  return (
    <MainLayout>
      <A11yTitle>메인 컨텐츠</A11yTitle>
      {children}
    </MainLayout>
  );
});
