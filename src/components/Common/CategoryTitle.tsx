import React from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';

const Title = styled.h3`
  margin: 0 0 50px;
  font-weight: 700;
  font-size: 8rem;
  color: #fff;
  opacity: 0.5;
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

  ${media.tablet`
    font-size: 6rem;
  `}

  ${media.mobile`
    font-size: 4rem;
  `}
`;

type CategoryProps = {
  title: string;
};

export default function CategoryTitle({ title }: CategoryProps) {
  return <Title>{title}</Title>;
}
