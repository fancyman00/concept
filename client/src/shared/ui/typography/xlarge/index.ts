import styled from "styled-components";

export const TypographyXL = styled.div<{$color?: string}>`
  font-weight: 700;
  font-size: 56px;
  line-height: 60px;
  color: ${(props)=>props.$color ?? '#0000008a'};
`