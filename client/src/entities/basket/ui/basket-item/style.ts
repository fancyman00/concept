import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 2px rgba(0, 170, 255, 0.5) solid;
`
export const Info = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
export const Actions = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border-radius: 8px;
  background: rgb(0, 170, 255);
  width: 120px;
`
export const Count = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: white;
  vertical-align: center;
`