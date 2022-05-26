import React, { useContext } from 'react';
import Button from '../../../../Components/Button';
import Status from '../../../../Components/Status';
import * as S from "./styles";
import AppContext from '../../../../context/AppContext';
import { useNavigate } from "react-router-dom";

export const List = (props) => {

  const { data } = props
  const { name, email, cpf = "123.456.789-03", phone, status } = data

  const context = useContext(AppContext)
  const history = useNavigate();

  const openBox = () => {
    context.setCurrentCustomer(data)
    history("/editar-pedido")
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
        <Status status={context.status[status]} />
      </S.ContentStatus>

      <S.Button onClick={() => openBox()}>
        <Button active name="Editar" />
      </S.Button>
    </S.List>
  )
}

export default List;
