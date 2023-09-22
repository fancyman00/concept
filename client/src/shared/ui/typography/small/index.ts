import styled from "styled-components";

export const TypographyS = styled.div<{$color?: string; $weight?: string | number}>`
  font-weight: ${(props) => props.$weight ?? '400'};
  font-size: 13px;
  line-height: 20px;
  color: ${(props)=>props.$color ?? '#0000008a'};
`