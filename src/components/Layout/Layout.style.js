import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SuperLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 25px;
  &.active {
    color: #b4eeb4;
  }
`;
export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Hamburger = styled.span`
  position: relative;
  display: block;
  width: 50px;
  height: 25px;
  margin: 20px auto;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  :before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0px;
    width: 100%;
    border-top: 5px solid #fff;
  }
`;
