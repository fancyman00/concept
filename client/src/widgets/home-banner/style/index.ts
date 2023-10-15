import styled from "styled-components";

export const Banner = styled.div<{$isMobile: boolean}>`
  box-sizing: border-box;
  padding: ${(props)=> props.$isMobile ? '20px 20px' : '120px 20px'};
  width: 1000px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const CompanyTitle = styled.div`
  padding: 20px;
  background: white;
  width: fit-content;
  border-radius: 4px;
`
export const Actions = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 400px) {
    margin-top: 32px;
  }
`
export const MobileHomeTypography = styled.div`
  font-size: 40px;
  line-height: 48px;
  color: white;
  font-weight: 700;
`