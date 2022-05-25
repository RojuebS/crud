import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: #fff;
  border: 1px solid #e29933;
  color: ${props => props.active ? "#e29933" : "#fff"};
  background: ${props => props.active ? "transparent" : "#e29933"};
  border-radius: 6px;
`