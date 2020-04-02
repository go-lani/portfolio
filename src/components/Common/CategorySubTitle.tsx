import React from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';

const Title = styled.p`
  margin: 0 0 40px;
  font-weight: 700;
  font-size: 4rem;
  color: #fff;
  opacity: 0.5;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  ${media.desktop`
    font-size: 5rem;
  `}
`;

type CategoryProps = {
  children: string;
};

export default function CategorySubTitle({ children }: CategoryProps) {
  return <Title>{children}</Title>;
}
