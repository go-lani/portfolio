import React from 'react';
import styled from 'styled-components';
import A11yTitle from '../Common/A11yTitle';

const MainLayout = styled.section<{ mainOffset: number }>`
  position: fixed;
  top: 0;
  transform: ${({ mainOffset }) => `translateY(-${mainOffset}px)`};
  z-index: 2;
  background: red;
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
    <MainLayout ref={ref} mainOffset={mainOffset}>
      <A11yTitle>메인 컨텐츠</A11yTitle>
      {children}
    </MainLayout>
  );
});
