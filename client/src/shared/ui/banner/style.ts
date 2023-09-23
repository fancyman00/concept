import styled from "styled-components";

export const Style = styled.div<{$background?: string; $padding?: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: ${(props)=>props.$padding ?? 60}px 0;
  background: ${(props)=>props.$background};
`