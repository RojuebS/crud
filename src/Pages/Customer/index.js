import React, { useContext, useState } from 'react';
import * as S from "./styles";
import Header from "../../Components/Header/index"
import IcoUser from "../../assets/ico-user.png"
import Button from "../../Components/Button/index"
import List from "./components/List/index"
import AppContext from '../../context/AppContext';
import LightBox from '../../Components/LightBox';

export const Customer = () => {

  const context = useContext(AppContext)
  const [stateBox, setStateBox] = useState(false)

  const list = context.listClients.list.customers;

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
          {list.map((data, index) => {
            return (
              <List key={index} data={data} toggleBox={() => setStateBox(!stateBox)} />
            )
          })}

        </S.ContentList>

        {stateBox && (
          <LightBox active={stateBox} />
        )}

      </S.Container>
    </S.ContentCustormer>
  )
}

export default Customer