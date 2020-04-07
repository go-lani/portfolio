import React from 'react';
import styled, { css } from 'styled-components';
import MenuBox from './MenuBox';
import media from '../../libs/MediaQuery';

const MenuTrigger = styled.button`
  display: inline-block;
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 4;
  width: 30px;
  height: 30px;

  ${media.mobile`
    top: 15px;
    left: 15px;
  `}
`;

const Trigger = styled.span<{ menuOpen: boolean; menuActive: boolean }>`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 2px;
  transform: translate(-50%, -50%);

  > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 1;
    text-indent: -9999em;
    transform: scaleX(1);
    transition: all 0.3s;
    background: #2f404f;

    ${({ menuOpen }) =>
      menuOpen &&
      css`
        transform: scaleX(0);
        opacity: 0;
      `}
  }

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 30px;
    height: 2px;
    background: #2f404f;
    transition: all 0.3s;

    ${({ menuOpen }) =>
      menuOpen &&
      css`
        top: 0;
        background: #fff;
        transform: rotate(45deg);
      `}
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 30px;
    height: 2px;
    background: #2f404f;
    transition: all 0.3s;

    ${({ menuOpen }) =>
      menuOpen &&
      css`
        bottom: 0;
        background: #fff;
        transform: rotate(-45deg);
      `}
  }

  ${({ menuActive }) =>
    menuActive &&
    css`
      > span {
        background: #fff;
      }

      &:before {
        background: #fff;
      }

      &:after {
        background: #fff;
      }
    `}
`;

type MenuProps = {
  menuOpen: boolean;
  menuActive: boolean;
  menuToggle: () => void;
  moveToSection: (category: string) => void;
};
export default function Menu({
  menuOpen,
  menuActive,
  moveToSection,
  menuToggle,
}: MenuProps) {
  return (
    <>
      <MenuTrigger type="button" onClick={menuToggle}>
        <Trigger menuOpen={menuOpen} menuActive={menuActive}>
          <span>{!menuOpen ? '열기' : '닫기'}</span>
        </Trigger>
      </MenuTrigger>
      <MenuBox
        moveToSection={moveToSection}
        menuOpen={menuOpen}
        menuToggle={menuToggle}
      />
    </>
  );
}
