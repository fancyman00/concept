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
`;
export const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-top: 20px;
`;
export const ModelName = styled.div``;
export const Image = styled.img`
    margin-top: 20px;
    width: 80%;
    height: auto;
`;
export const Description = styled.div`
    margin-top: 12px;
    text-align: center;
`;
export const Link = styled(NavLink)`
  margin-top: 20px;
  color: #00AAFF;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`