import React from 'react';
import styled, { css } from 'styled-components';
import media from '../../libs/MediaQuery';

const Item = styled.li`
  float: left;
  width: calc(50% - 10px);
  padding: 30px;
  margin: 0 0 20px 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: #f7f7f7;

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

const UtillArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px;
`;

const Logo = styled.div`
  flex: 1 0 auto;
  width: 120px;
  height: 40px;

  img {
    height: 100%;
  }

  ${media.mobile`
    width: 100px;
    height: 30px;
  `}
`;

const Level = styled.div<{ level: number }>`
  position: relative;
  max-width: 320px;
  width: 100%;
  padding: 0 50px 0 0;

  &:after {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 1.4rem;
    ${({ level }) => css`
      content: '${level}%'
    `}
  }

  ${media.mobile`
    padding: 0 30px 0 0;
  `}
`;

const Bar = styled.span<{ level: number; color: string }>`
  display: block;
  position: relative;
  overflow: hidden;
  height: 6px;
  background: #c7c7c7;
  border-radius: 4px;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    width: ${({ level }) => `${level}%`};
    background: ${({ color }) => color};
  }
`;

const DetailArea = styled.div``;

const Title = styled.p`
  font-size: 2rem;
  margin: 0 0 10px;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  word-break: keep-all;
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
      <UtillArea>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Level level={level}>
          <Bar level={level} color={color} />
        </Level>
      </UtillArea>
      <DetailArea>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DetailArea>
    </Item>
  );
}
