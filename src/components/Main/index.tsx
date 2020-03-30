import React from 'react';
import styled from 'styled-components';
import A11yTitle from '../Common/A11yTitle';

const MainLayout = styled.section`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background: #fff;
`;

type MainProps = {
  mainOffset: number;
  children: JSX.Element[];
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, MainProps>(function Main(
  { mainOffset, children },
  ref,
): JSX.Element {
  return (
    <MainLayout ref={ref} style={{ transform: `translateY(-${mainOffset}px)` }}>
      <A11yTitle>메인 컨텐츠</A11yTitle>
      {children}
    </MainLayout>
  );
});
