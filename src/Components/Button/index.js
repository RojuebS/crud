import * as S from "./styles";

export const Button = ({ name, active }) => {

  return (
    <S.Button active={active}>{name}</S.Button>
  )
}

export default Button;
