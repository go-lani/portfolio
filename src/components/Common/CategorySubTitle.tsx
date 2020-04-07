import React from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';

const Title = styled.p<{ color?: string }>`
  margin: 0 0 40px;
  font-weight: 700;
  font-size: 3.5rem;
  color: ${({ color }) => (color ? color : '#2f404f')};

  ${media.mobile`
    margin: 0 0 30px;
    font-size: 2.5rem
  `}
`;

type CategoryProps = {
  children: string;
  color?: string;
};

export default function CategorySubTitle({ color, children }: CategoryProps) {
  return <Title color={color}>{children}</Title>;
}
