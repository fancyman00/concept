import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const IconItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  img{
    width: 28px;
    height: auto;
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.56);
`
export const Counter = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  line-height: 24px;
  background: #00AAFF;
  border: 4px solid #00AAFF;
  color: white;
  font-size: 12px;
`