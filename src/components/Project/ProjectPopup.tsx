import React, { useEffect } from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';
import Popup from '../Popup';

interface dataType {
  id: number;
  title: string;
  description: string;
  period: string;
  thumb: string;
  skills: string[];
}

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
  const { title, description, period, skills } = selectProject;

  console.log(title, description, period, skills);
  return (
    <Popup visible={visible} onHidePopup={onHidePopup}>
      컨텐츠
    </Popup>
  );
}
