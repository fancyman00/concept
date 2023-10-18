import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {isMobile} from "react-device-detect";
export const ItemStyle = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;  
  line-height: 28px;
  color: rgba(0, 0, 0, 0.56);
  text-decoration: none;

  margin-right: ${!isMobile && '48px'};
  transition: all 0.2s;
  img{
    width: 24px;
    height: 24px;
  }
  &.active {
    box-shadow: inset 0 -3px 0 -1px #00AAFF;
    color: #00AAFF;
  }

  &:hover {
    box-shadow: inset 0 -3px 0 -1px #00AAFF;
    color: #00AAFF;
  }
`
export const StyleDesktop = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  height: 96px;
`
export const StyleMobile = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: white;
  gap: 16px;
  padding: 20px 0;
`
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box; 
  padding: 0 16px;
`
export const LogoStyle = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 128px;
  color: black;
  text-decoration: none;
`
export const LogoStyleMobile = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`
export const IconItemStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.56);
  img{
    width: 28px;
    height: auto;
  }
`