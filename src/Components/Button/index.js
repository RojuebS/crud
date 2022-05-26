import * as S from "./styles";

export const Button = ({ name, active, handleClick = () => { } }) => {

  return (
    <S.Button onClick={handleClick} active={active}>{name}</S.Button>
  )
}

export default Button;
