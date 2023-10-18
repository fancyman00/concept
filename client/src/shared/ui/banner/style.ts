import styled from "styled-components";
import {isMobile} from "react-device-detect";

export const Style = styled.div<{$background?: string; $padding?: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;   
  width: 100vw;
  padding: ${(props)=> isMobile ? 20 : props.$padding ?? 60}px ${isMobile ? 20 : 0}px;
  background: ${(props)=>props.$background};
`