import React, { useContext } from 'react';
import Button from '../../../../Components/Button';
import Status from '../../../../Components/Status';
import * as S from "./styles";
import AppContext from '../../../../context/AppContext';

export const List = (props) => {

  const { data, toggleBox } = props
  const { name, email, cpf = "123.456.789-03", phone, status } = data

  const context = useContext(AppContext)

  const openBox = () => {
    context.setCurrentCustomer(data)
    toggleBox()
  }


  const setStatus = {
    "active": {
      name: "Ativo",
      background: "#4aad5b"
    },
    "disabled": {
      name: "Desativado",
      background: "#d2d2d2"
    },
    "inactive": {
      name: "Inativo",
      background: "#d7323f"
    },
    "waiting": {
      name: "Aguardando ativação",
      background: "#d3a710"
    },
  }

  return (
    <S.List>
      <S.NameAndEmail>
        <p>{name}</p>
        <span>{email}</span>
      </S.NameAndEmail>

      <S.CpfAndTel>
        <p>{cpf}</p>
        <span>{phone}</span>
      </S.CpfAndTel>

      <S.ContentStatus>
        <Status status={setStatus[status]} />
      </S.ContentStatus>

      <S.Button onClick={() => openBox()}>
        <Button active name="Editar" />
      </S.Button>
    </S.List>
  )
}

export default List;
