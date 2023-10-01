import styled from "styled-components";

export const Style = styled.div<{$rounded?: boolean, $background?: string, $size?: number}>`
  width: ${(props)=> props.$size ?? 20}px;
  height: ${(props)=> props.$size ?? 20}px;
  padding: 4px;
  border-radius: ${(props) => props.$rounded && '50%'};
  background: ${(props) => props.$background ?? 'none'};
  img{
    width: ${(props)=> props.$size ?? 20}px;
    height: ${(props)=> props.$size ?? 20}px;
  }
  transition: all 0.5s;
  &:hover{
    opacity: 0.8;
  }
  user-select: none;
  cursor: pointer;
`