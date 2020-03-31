import React from 'react';
import styled from 'styled-components';
import A11yTitle from '../Common/A11yTitle';

const MainLayout = styled.section`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background: #d8d8d8;
`;

type MainProps = {
  contentScroll: number;
  children: JSX.Element[];
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, MainProps>(function Main(
  { contentScroll, children },
  ref,
) {
  return (
    <MainLayout
      ref={ref}
      style={{ transform: `translateY(-${contentScroll}px)` }}
    >
      <A11yTitle>메인 컨텐츠</A11yTitle>
      {children}
    </MainLayout>
  );
});
