import React from 'react';
import * as S from "./styles";
import Header from "../../Components/Header/index"
import IcoUser from "../../assets/ico-user.png"

export const Customer = () => {

  const getClientes = () => { }

  return (
    <S.ContentCustormer>
      <Header />
      <S.Container>
        <S.TitleCustomer>
          <img src={IcoUser} alt="Painel de clientes" /> Painel de clientes
        </S.TitleCustomer>
      </S.Container>
    </S.ContentCustormer>
  )
}

export default Customer