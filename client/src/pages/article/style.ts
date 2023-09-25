import styled from 'styled-components';
export const Title = styled.div`
    padding-top: 20px;
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
    margin-top: 20px;
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
    padding: 40px 0;
    justify-content: center;
    align-items: center;
`;
export const Description = styled.div`
    background: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
  gap: 20px;
    width: fit-content;
`;
export const Advantages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`;
