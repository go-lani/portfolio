import React from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';

const Item = styled.li`
  float: left;
  width: calc(50% - 10px);
  padding: 20px;
  margin: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  &:first-child {
    margin-left: 0;
  }

  &:nth-child(2n + 1) {
    clear: both;
    margin-left: 0;
  }

  ${media.mobile`
    float: none;
    width: 100%;
    margin: 0 0 20px;
  `}
`;

const LogoArea = styled.div`
  width: 100%;
  min-width: 100px;
  height: 50px;

  img {
    height: 100%;
  }
`;

const DetailArea = styled.div``;

const Title = styled.p`
  font-size: 2rem;
`;

const Level = styled.div``;

const Bar = styled.span``;

const Description = styled.p`
  font-size: 1.8rem;
`;

type SkillItemProps = {
  id: number;
  title: string;
  level: number;
  description: string;
  logo: string;
  color: string;
};

export default function SkillItem({
  id,
  title,
  level,
  description,
  logo,
  color,
}: SkillItemProps) {
  return (
    <Item>
      <LogoArea>
        <img src={logo} alt="" />
      </LogoArea>
      <DetailArea>
        <Title>{title}</Title>
        <Level>
          <Bar />
        </Level>
        <Description>{description}</Description>
      </DetailArea>
    </Item>
  );
}
