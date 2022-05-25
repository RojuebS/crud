import styled from "styled-components";

export const ContentCustormer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 330px) {
    border: 1px solid red;
  }
`;

export const TitleCustomer = styled.h2`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  color: #777777;
  padding-bottom: 10px;

  img {
    margin-right: 15px;
  }
`

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
`