import React from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';

const Title = styled.h3<{ color?: string }>`
  margin: 0 0 50px;
  font-weight: 700;
  font-size: 6rem;
  color: ${({ color }) => (color ? color : '#2f404f')};
  letter-spacing: 0.25em;

  ${media.tablet`
    font-size: 5rem;
  `}

  ${media.mobile`
    margin: 0 0 30px;
    font-size: 4rem;
  `}
`;

type CategoryProps = {
  title: string;
  color?: string;
};

export default function CategoryTitle({ color, title }: CategoryProps) {
  return <Title color={color}>{title}</Title>;
}
