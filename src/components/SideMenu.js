import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { MenuContext } from "../context/navState";

const Menu = styled.nav`
  position: absolute;
  left: 0px;
  z-index: 293;
  display: block;
  width: 240px;
  height: 100vh;
  max-width: 100%;
  margin-top: 0px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #363348;
  // border-bottom-right-radius: 120px;

  transform: translateX(-120%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 1100px) {
    transform: translateX(0%);
  } ;
`;

export const SuperLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  max-width: 100%;
  padding-left: 10%;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  text-decoration: none;
  font-weight: 500;

  font-size: 20px;
  &.active {
    color: #64694b;

    border-bottom: 2px solid white;
    font-size: 35px;
  }
`;
const HeaderNav = styled.h2`
  font-family: "Paytone One";
  color: #202020;
  text-transform: uppercase;
  letter-spacing: -2px;
`;
const SpanNav = styled.span`
font-family: 'Tenor Sans';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 29px;
text-align: center;
text-transform: uppercase;
color: white;
`;
export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <SuperLink to="/">
        <HeaderNav>
     
          <SpanNav>Головна</SpanNav>
        </HeaderNav>
      </SuperLink>

      <SuperLink to="/aboutUs">
        <HeaderNav>
   
          <SpanNav>Про нас</SpanNav>
        </HeaderNav>
      </SuperLink>

      <SuperLink to="/help">
        <HeaderNav>
    
          <SpanNav>Допомога</SpanNav>
        </HeaderNav>
      </SuperLink>


    </>
  ),
};
