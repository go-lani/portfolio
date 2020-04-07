import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import media from '../../libs/MediaQuery';

const Item = styled.li`
  width: 45%;
  margin-top: -5%;
  cursor: pointer;
  clear: both;

  &:nth-child(odd) {
    float: left;
    margin-left: 0;

    > div {
      > span {
        top: 20px;
        left: -60px;
      }
    }
  }

  &:nth-child(even) {
    float: right;
    > div {
      > span {
        top: 40px;
        right: -80px;
        transform: rotate(90deg);
        transform-origin: center 0;
      }
    }
  }

  &:first-child {
    margin-top: 0;
    transform: none;
  }

  &:hover {
    > div {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0);

      > span {
        > span {
          opacity: 1;
          transform: translateY(0);
        }
      }

      &:after {
        background: rgba(0, 0, 0, 0.6);
      }
    }
  }

  ${media.mobile`
    width: 100%;
    margin: 0 0 100px;

    &:last-child {
      margin: 0;
    }

    &:nth-child(even) {
      float: none;

      > div {
        > span {
          right: -70px;
        }
      }
    }
    &:nth-child(odd) {
      float: none;

      > div {
        > span {
          top: 20px;
          left: -30px;
        }
      }
    }
  `}
`;

const Visual = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  transition: all 0.5s;

  > span {
    position: absolute;
    text-align: center;
    width: 200px;
    background: rgba(195, 195, 195, 0.2);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
    z-index: 1;
    font-size: 1.6rem;
    color: #fff;
    padding: 20px 0;

    > span {
      display: inline-block;
      padding: 0 30px 0 0;
      background: url('./images/arr-right-white-24x24.png') right center
        no-repeat;
      background-size: 15px;
      opacity: 0;
      transform: translateY(40%);
      transition: all 0.5s;

      ${media.mobile`
        opacity: 1;
        transform: translateY(0);
      `}

      ${media.tablet`
        opacity: 1;
        transform: translateY(0);
      `}
    }
  }

  p {
    position: absolute;
    bottom: -20px;
    left: 10px;
    z-index: 1;
    word-break: break-all;
    font-weight: 700;
    font-size: 5rem;
    color: #ececec;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
  }

  ${media.tablet`
    p {
      font-size: 4rem;
    }
  `}

  ${media.mobile`
    p {
      font-size: 3.5rem;
    }

    > span {
      width: 180px;
    }
  `}
`;

const SkillList = styled.ul`
  margin: 35px 0 0;
`;

const Skill = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  border-radius: 5px;
  background: #0b6fc3;
  color: #fff;
`;

type RoleType = {
  img: string | null;
  text: string;
};

type ProjectItemProps = {
  id: number;
  type: string;
  title: string;
  subject: string;
  period: string;
  thumb: string;
  skills: string[];
  mock: string;
  video: string | null;
  site: string | null;
  github: string | null;
  reviews: string[];
  notice?: string;
  people?: string;
  role: RoleType[];
  onViewDetail: (id: number) => void;
};

export default function ProjectItem({
  id,
  title,
  thumb,
  skills,
  onViewDetail,
}: ProjectItemProps) {
  return (
    <Item onClick={() => onViewDetail(id)}>
      <Visual>
        <span>
          <span>View Detail</span>
        </span>
        <img src={thumb} alt="" />
        <p>{title}</p>
      </Visual>
      <SkillList>
        {skills.map(skill => (
          <Skill key={uuidv4()}>{skill}</Skill>
        ))}
      </SkillList>
    </Item>
  );
}
