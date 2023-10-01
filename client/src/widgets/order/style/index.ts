import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Style = styled.div`
    padding-bottom: 20px;
`;
export const Title = styled.div`
    padding-top: 40px;
`;
export const Content = styled.div`
    margin-top: 40px;
    padding: 40px;
    background: white;
    border-radius: 12px;
    width: 100%;
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
`;
export const Ref = styled(NavLink)`
    text-decoration-color: #00aaff;
    text-underline-offset: 8px;
    transition: 0.5s all;
    &:hover {
        opacity: 0.7;
    }
`;

