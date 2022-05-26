import styled from "styled-components";

export const ContentStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Status = styled.div`
  width: 14px;
  height: 14px;
  background: ${props => props.background};
  border-radius: 100%;
  margin-right: 10px;
`