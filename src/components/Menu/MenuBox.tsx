import React from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
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
      background: #000;
      border-radius: 0;
      opacity: 1;
    `}
`;

const MenuList = styled.ul<{ menuActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ menuActive }) =>
    !menuActive &&
    css`
      opacity: 0;
    `}
`;

const MenuItem = styled.li`
  & + & {
    margin: 30px 0 0;
  }

  button {
    display: block;
    font-size: 4rem;
    color: #fff;
    letter-spacing: 0.1em;
    transition: all 0.3s;
    text-shadow: 6px 6px 18px rgba(255, 255, 255, 0.35);
  }

  &:hover {
    button {
      color: #0e2ba4;
    }
  }
`;

type MenuProps = {
  menuActive: boolean;
  menuToggle: () => void;
  moveToSection: (category: string) => void;
};

const menuItems = ['HOME', 'ABOUT', 'SKILL', 'PROJECT'];

export default function MenuBox({
  moveToSection,
  menuActive,
  menuToggle,
}: MenuProps): JSX.Element {
  return (
    <MenuBoxLayout menuActive={menuActive}>
      <A11yTitle>메뉴</A11yTitle>
      <MenuList menuActive={menuActive}>
        {menuItems.map(item => (
          <MenuItem key={uuidv4()}>
            <button type="button" onClick={() => moveToSection(item)}>
              {item}
            </button>
          </MenuItem>
        ))}
      </MenuList>
    </MenuBoxLayout>
  );
}
