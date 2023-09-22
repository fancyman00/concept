import styled from "styled-components";

export const TypographyM = styled.div<{$color?: string; $weight?: string | number}>`
  font-weight: ${(props) => props.$weight ?? '400'};
  font-size: 15px;
  line-height: 24px;
  color: ${(props)=>props.$color ?? '#0000008a'};
`