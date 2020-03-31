import React from 'react';
import styled, { css } from 'styled-components';
import MenuBox from './MenuBox';

const MenuTrigger = styled.button<{ menuActive: boolean }>`
  display: inline-block;
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 4;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  color: blue;
`;

type MenuProps = {
  menuActive: boolean;
  menuToggle: () => void;
};
export default function Menu({ menuActive, menuToggle }: MenuProps) {
  return (
    <>
      <MenuTrigger type="button" menuActive={menuActive} onClick={menuToggle}>
        열기
      </MenuTrigger>
      <MenuBox menuActive={menuActive} menuToggle={menuToggle} />
    </>
  );
}
