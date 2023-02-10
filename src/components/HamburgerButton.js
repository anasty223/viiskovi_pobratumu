import React, { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../context/navState";

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
 
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }



  :hover {
    span:nth-of-type(1) {
      width: 11px;
    }

    span:nth-of-type(2) {
      width: 21px;
    }

  //   span:nth-of-type(3) {
  //     width: 11px;
  //   }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(4px,8px);
      width: 21px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(4px,-7px);
      width: 21px;
    }
  }

  @media (min-width: 1100px) {
    display: none;
  } ;
`;

const Bar = styled.span`
  display: block;
  width: 21px;
  height: 1px;
  margin-bottom: 7px;
  background-color: #D8D8D8;
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? "active" : " "}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />

      
    </MenuButton>
  );
};

export default HamburgerButton;
