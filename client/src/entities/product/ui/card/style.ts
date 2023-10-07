import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  padding: 20px;
  align-items: center;
  box-shadow: rgba(40, 39, 39, 0.12) 2px 5px 5px 2px;
  transition: 0.5s all;

  &:hover {
    opacity: 0.8;
    
  }
`;
export const TitleB = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-top: 20px;
`;
export const ModelNameB = styled.div``;
export const Image = styled.img`
    margin-top: 20px;
    width: 80%;
    height: auto;
`;
export const DescriptionB = styled.div`
    margin-top: 12px;
    text-align: center;
`;
export const Add = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background: #00AAFF;
  width: 64%;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  transition: 0.5s all;

  &:hover {
    background: #008cff;
  }

  cursor: pointer;
  user-select: none;
`
export const Main = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: black;
`