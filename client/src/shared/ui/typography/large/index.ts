import styled from "styled-components";
export const TypographyL = styled.div<{$color?: string; $weight?: string | number}>`
  font-size: 32px;
  line-height: 28px;
  color: ${(props)=>props.$color ?? '#0000008a'};
  font-weight: ${(props) => props.$weight ?? '500'};
`