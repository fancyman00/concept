import styled from 'styled-components';

export const Item = styled.div`
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    padding-right: 20px;
    border-right: solid 2px #00aaff;
    &:last-child {
        border-right: none;
    }
    transition: all 0.25s;
    &:hover {
        color: rgba(0, 0, 0, 0.5);
    }
`;
export const Style = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
export const Style1 = styled.div`
    padding-bottom: 20px;
`;
export const CardList = styled.div`
    margin-top: 20px;
    @media (min-width: 375px) {
        grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    }

    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));

    display: grid;
    gap: 24px;
    max-width: 1152px;
`;
