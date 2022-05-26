import styled from "styled-components";

export const FormItem = styled.div`
  width: 300px;
  padding-bottom: 50px;

  input, select {
    width: 100%;
    padding: 20px 10px;
    margin-bottom: 10px;
    border: 1px solid #cccccc;
    border-radius: 6px;

    @media screen and (max-width: 767px) {
      width: calc(100% - 10px);
    }
  }

  select {
    width: calc(100% + 20px);

    @media screen and (max-width: 767px) {
      width: calc(100% + 10px);
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const ContentButtons = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  div {
    width: calc(50% - 50px);
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    div {
      width: 100%;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`