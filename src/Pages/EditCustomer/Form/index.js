import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext';
import Button from '../../../Components/Button';
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Form = ({ currentCustomer, handleChange, handleSubmit }) => {

  const context = useContext(AppContext);

  const history = useNavigate()

  return (
    <form>
      <S.FormItem>
        <input placeholder="Nome" onChange={handleChange} value={currentCustomer.name} name="name" />
        <input placeholder="E-mail" onChange={handleChange} value={currentCustomer.email} name="email" />
        <input placeholder="CPF" onChange={handleChange} value="123456" />
        <input placeholder="Telefone" onChange={handleChange} value={currentCustomer.ph} name="phone" />

        <select>
          {Object.entries(context.status).map((status, i) => {
            return (
              <option key={i} value={status[0]}>{status[1].name}</option>
            )
          })}
        </select>

        <S.ContentButtons>
          <Button name="Salvar" active handleClick={() => handleSubmit()} />
          <Button name="Voltar" active={false} handleClick={() => history("/")} />
        </S.ContentButtons>
      </S.FormItem>
    </form>
  )
}

export default Form;


