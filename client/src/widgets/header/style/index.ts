import styled from "styled-components";

export const MobileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px rgba(195, 195, 195, 0.55);
  position: sticky;
  top: 0;
  backdrop-filter: blur(4px);
  background: var(--header-background);
  opacity: 1;
  z-index: 200;
  background: #ffffff;
`;

export const DesktopStyle = styled.div`
  &:before {
    background: rgba(255, 255, 255, 0.51);
    bottom: -1px;
    content: '';
    height: 1px;
    opacity: 0.5;
    position: absolute;
    transition: opacity 0.25s ease;
    width: 100%;
  }

  border-bottom: solid 1px rgba(195, 195, 195, 0.55);
  position: sticky;
  top: 0;
  backdrop-filter: blur(4px);
  background: var(--header-background);
  opacity: 1;
  z-index: 200;
  background: #ffffff;
  padding-bottom: 2px;
`;