import styled from "styled-components";
export type ProductFilterType = {
    Name: string,
}
export const ProductFilterItem = styled.div<{$filter: boolean}>`
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
      color: ${(props)=> !props.$filter && 'rgba(0, 0, 0, 0.5)'};
    }
    color: ${(props)=>props.$filter && '#00aaff'};
`;