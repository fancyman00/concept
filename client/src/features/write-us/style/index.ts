import styled from "styled-components";

export const WriteUsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`
export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  color: white;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 500;
`
export const Row = styled.div`
  display: flex;  
  gap: 12px;
`
export const TextArea = styled.textarea`
  all: unset;
  resize: vertical;
  background: white;
  border-radius: 2px;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  border: solid 1px #0376EA24;
  min-height: 250px;
  overflow-x: hidden;
  word-wrap: break-word;
`
export const Submit = styled.button`
  all: unset;
  cursor: pointer;
  border: none;
  resize: vertical;
  background: #ffffff;
  border-radius: 2px;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  text-align: center;
  color: #00AAFF;
  transition: all 0.5s;
  &:hover{
    opacity: 0.9;
  }
`
