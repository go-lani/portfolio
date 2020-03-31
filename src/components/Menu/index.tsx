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

const Trigger = styled.span<{ menuActive: boolean; isIntro: boolean }>`
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
            background: #fff;

    ${({ menuActive }) =>
      menuActive &&
      css`
        transform: scaleX(0);
        opacity: 0;
      `}

    /* ${({ isIntro }) =>
      isIntro
        ? css`
            background: #fff;
          `
        : css`
            background: #000;
          `} */
  }

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 30px;
    height: 2px;
            background: #fff;
    transition: all 0.3s;

    /* ${({ isIntro }) =>
      isIntro
        ? css`
            background: #fff;
          `
        : css`
            background: #000;
          `} */

    ${({ menuActive }) =>
      menuActive &&
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
    background: #fff;
    transition: all 0.3s;


    ${({ menuActive }) =>
      menuActive &&
      css`
        bottom: 0;
        background: #fff;
        transform: rotate(-45deg);
      `}
  }
`;

type MenuProps = {
  menuActive: boolean;
  isIntro: boolean;
  menuToggle: () => void;
  moveToSection: (category: string) => void;
};
export default function Menu({
  moveToSection,
  menuActive,
  menuToggle,
  isIntro,
}: MenuProps) {
  return (
    <>
      <MenuTrigger type="button" onClick={menuToggle}>
        <Trigger menuActive={menuActive} isIntro={isIntro}>
          <span>{!menuActive ? '열기' : '닫기'}</span>
        </Trigger>
      </MenuTrigger>
      <MenuBox
        moveToSection={moveToSection}
        menuActive={menuActive}
        menuToggle={menuToggle}
      />
    </>
  );
}
