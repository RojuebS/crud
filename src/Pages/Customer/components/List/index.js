import React from 'react';
import Button from '../../../../Components/Button';
import Status from '../../../../Components/Status';
import * as S from "./styles";

export const List = ({ name, email, cpf, cel, status }) => {

  return (
    <S.List>
      <S.NameAndEmail>
        <p>John Doe</p>
        <span>John_does@test.com</span>
      </S.NameAndEmail>

      <S.CpfAndTel>
        <p>123.456.789-00</p>
        <span>( 11 ) 9998-8745</span>
      </S.CpfAndTel>

      <Status />

      <Button active name="Editar" />
    </S.List>
  )
}

export default List;
