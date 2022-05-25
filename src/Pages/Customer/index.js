import React from 'react';
import * as S from "./styles";
import Header from "../../Components/Header/index"
import IcoUser from "../../assets/ico-user.png"
import Button from "../../Components/Button/index"
import List from "./components/List/index"

export const Customer = () => {

  // const getClientes = () => { }

  return (
    <S.ContentCustormer>
      <Header />
      <S.Container>
        <S.TitleCustomer>
          <img src={IcoUser} alt="Painel de clientes" /> Painel de clientes
        </S.TitleCustomer>

        <S.ContentSubTitleAndButton>
          <S.SubTitle>
            Listagem de usuário
            <span>Escolha um cliente para visualizar os detalhes</span>
          </S.SubTitle>

          <Button name="Novo cliente" active={false} />

        </S.ContentSubTitleAndButton>

        <S.ContentList>
          <List />
        </S.ContentList>
      </S.Container>
    </S.ContentCustormer>
  )
}

export default Customer