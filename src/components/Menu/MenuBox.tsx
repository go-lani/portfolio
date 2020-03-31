import React from 'react';
import styled, { css } from 'styled-components';
import A11yTitle from '../Common/A11yTitle';

const MenuBoxLayout = styled.nav<{ menuActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 0;
  height: 0;
  transition: all 0.3s linear;
  border-radius: 0 25% 25% 25%;
  opacity: 0;

  ${({ menuActive }) =>
    menuActive &&
    css`
      width: 100%;
      height: 100%;
      padding: 30px;
      background: #b9b8bd;
      border-radius: 0;
      opacity: 1;
    `}
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.li``;

type MenuProps = {
  menuActive: boolean;
  menuToggle: () => void;
};

export default function MenuBox({ menuActive, menuToggle }: MenuProps) {
  return (
    <MenuBoxLayout menuActive={menuActive}>
      <A11yTitle>메뉴</A11yTitle>
      <MenuList>
        <MenuItem>HOME</MenuItem>
        <MenuItem>INFO</MenuItem>
        <MenuItem>SKILL</MenuItem>
        <MenuItem>PROJECT</MenuItem>
      </MenuList>
    </MenuBoxLayout>
  );
}
