import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  margin: 0 0 20px;
  font-weight: 700;
  font-size: 3rem;
  color: #fff;
  opacity: 0.5;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;
type CategoryProps = {
  children: string;
};

export default function CategorySubTitle({ children }: CategoryProps) {
  return <Title>{children}</Title>;
}
