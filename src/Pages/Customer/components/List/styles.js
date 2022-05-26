import styled from "styled-components";

export const Button = styled.div`
  width: 80px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
  }
  
`
export const ContentStatus = styled.div`
  width: 200px;
  margin: 0 50px;
  text-align: left;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 0 10px;
  }
`
export const CpfAndTel = styled.div`
  width: 170px;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
  }
`
export const List = styled.div`
  border: 1px solid #ddd7d7;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  justify-content: space-between;
  color: #828282;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }

  p {
    padding: 0;
    margin: 0;
    font-weight: bold;
  }
`
export const NameAndEmail = styled.div`
  flex: 1;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`
