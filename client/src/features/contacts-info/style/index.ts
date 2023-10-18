import styled from "styled-components";
import {isMobile} from "react-device-detect";
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
  }
  width: 300px;
  gap: 20px;
  text-align: center;
`
export const Style = styled.div`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  gap: 64px;
`
