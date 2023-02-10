import React, { useRef, useContext } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/onClickOutside";
import { MenuContext } from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import { SideMenu } from "./SideMenu";
import pngtreeshakelogo  from "../images/pngtreeshakelogo.png"
import callback  from "../images/callback@2x.png"

const Navbar = styled.div`
  

  position: relative;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #363348 none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px ;
 

  z-index: 500;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
`;
const Link = styled.a`
  width: 20px;
`;
const Logo=styled.img`
border:50px;
`
const ContainerLogo=styled.div`
display: flex;
flex-direction:column;
`
const HeaderLogo=styled.h3`
font-size:8px;
font-family: 'Tenor Sans';
font-weight:100;
`
const Callback=styled.img`
margin-left:auto;`


const LinkPhone=styled.a`
text-decoration:none;
margin:18px 8px 18px 14px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`
const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
      <Container>
        <HamburgerButton />
        
       <ContainerLogo> 
        <Logo src={pngtreeshakelogo} width="55px" alt="logo"/>
        <HeaderLogo>Військові побратими</HeaderLogo>
        </ContainerLogo>
       
        <Callback src={callback} width="35px" alt="logo"/>

<LinkPhone  href="tel:+380974444131">+3 (8097) 444 41 31</LinkPhone>
        </Container>
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;
