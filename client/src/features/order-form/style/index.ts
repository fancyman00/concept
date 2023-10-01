import styled from "styled-components";

export const Style = styled.form`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const Submit = styled.button`
  all: unset;
  border: none;
  resize: vertical;
  background: #00aaff;
  border-radius: 2px;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  text-align: center;
  color: white;
  transition: all 0.5s;
  margin-top: 20px;
  &:hover{
    opacity: 0.9;
  }
`