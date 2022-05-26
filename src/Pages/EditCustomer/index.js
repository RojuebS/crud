import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import AppContext from "../../context/AppContext";
import IcoUser from "../../assets/ico-user.png"
import Form from "./Form/index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const EditCustomer = ({ name, active }) => {

  const context = useContext(AppContext)
  const history = useNavigate()
  const [state, setState] = useState(context.currentCustomer)

  const handleChange = (ev) => {
    setState({
      ...state,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = () => {
    context.setCurrentCustomer(state)
    toast.success(`Usuário(a) ${state.name} editado(a) com sucesso!`);
  }

  useEffect(() => {
    if (!context.currentCustomer) {
      history("/")
    }
  }, [context.currentCustomer, history])

  return (
    <S.ContentCustormer>
      <S.Container>
        <S.TitleCustomer>
          <img src={IcoUser} alt="Painel de clientes" /> Painel de clientes
        </S.TitleCustomer>

        <S.ContentSubTitleAndButton>
          <S.SubTitle>
            Editar usuário
            <span>Edite os campos a seguir para criar um novo usuário</span>
          </S.SubTitle>
        </S.ContentSubTitleAndButton>

        {!!context.currentCustomer && (
          <Form currentCustomer={state} handleSubmit={handleSubmit} handleChange={handleChange} />
        )}
      </S.Container>

      <ToastContainer />

    </S.ContentCustormer >
  )
}

export default EditCustomer;
