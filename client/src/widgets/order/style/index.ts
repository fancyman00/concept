import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {isMobile} from "react-device-detect";
export const Style = styled.div`
    padding-bottom: 20px;
`;
export const Title = styled.div`
    padding-top: ${isMobile ? '16px' : '40px'};;
    padding-left: ${isMobile && '16px'};
`;
export const Content = styled.div`
    margin-top: ${isMobile ? '16px' : '40px'};
    padding: 40px;
    background:  ${isMobile ? 'transparent' : 'white'};
    border-radius: 12px;
    width: 100%;
    box-sizing: border-box;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
`;
export const ErrorBoundary = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    max-width: 100vw;
`;
export const Ref = styled(NavLink)`
    text-decoration-color: #00aaff;
    text-underline-offset: 8px;
    transition: 0.5s all;
    &:hover {
        opacity: 0.7;
    }
`;

