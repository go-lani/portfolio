import React, { useEffect } from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';
import Popup from '../Popup';

const MockImg = styled.div`
  img {
    width: 100%;
  }
`;

const Title = styled.p``;

type RoleType = {
  img: string | null;
  text: string;
};

type dataType = {
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
  role: RoleType[];
};

type PopupProps = {
  visible: boolean;
  onHidePopup: () => void;
  selectProject: dataType;
};

export default function ProjectPopup({
  visible,
  selectProject,
  onHidePopup,
}: PopupProps) {
  const { title, subject, period, skills, mock, role } = selectProject;

  console.log(title, subject, period, skills, role);
  return (
    <Popup visible={visible} onHidePopup={onHidePopup}>
      <MockImg>
        <img src={mock} alt="" />
      </MockImg>
      <Title>{title}</Title>
    </Popup>
  );
}
