import styled from "styled-components";
export const TypographyL = styled.div<{$color?: string}>`
  font-weight: 500;
  font-size: 32px;
  line-height: 28px;
  color: ${(props)=>props.$color ?? '#0000008a'};
`