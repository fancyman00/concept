import styled from "styled-components";

export const Item = styled.div<{isFilter: boolean}>`
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
      color: ${(props)=> !props.isFilter && 'rgba(0, 0, 0, 0.5)'};
    }
    color: ${(props)=>props.isFilter && '#00aaff'};
`;
export const Style = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;