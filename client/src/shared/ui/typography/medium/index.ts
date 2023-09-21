import styled from "styled-components";

export const TypographyM = styled.div<{$color?: string}>`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: ${(props)=>props.$color ?? '#0000008a'};
`