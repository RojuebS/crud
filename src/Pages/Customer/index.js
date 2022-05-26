import React, { useContext } from 'react';
import * as S from "./styles";
import IcoUser from "../../assets/ico-user.png"
import Button from "../../Components/Button/index"
import List from "./components/List/index"
import AppContext from '../../context/AppContext';

export const Customer = () => {

  const context = useContext(AppContext)

  const list = context.listClients.list.customers;

  return (
    <S.ContentCustormer>
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
          {list.map((data, index) => {
            return (
              <List key={index} data={data} />
            )
          })}

        </S.ContentList>

        {/* {stateBox && (
          <LightBox active={stateBox} />
        )} */}

      </S.Container>
    </S.ContentCustormer>
  )
}

export default Customer