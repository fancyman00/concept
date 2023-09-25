import styled from 'styled-components';
export const Title = styled.div`
    padding-top: 40px;
`;
export const Model = styled.div`
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
    background: #00aaff;
`;
export const Content = styled.div`
    margin-top: 40px;
    padding: 40px;
    background: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
export const Image = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    img {
        padding: 20px;
        width: 40%;
        height: auto;
    }
    padding-bottom: 40px;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
`;


export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`;
