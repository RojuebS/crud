import * as S from "./styles";

export const LightBox = (props) => {

  const { children, active } = props;

  return (
    <>
      <S.BackgroundBox />
      <S.ContainerBox>
        <S.Box active={active}>
          <S.Closed>
            Fechar
          </S.Closed>
          {children}
        </S.Box>
      </S.ContainerBox>
    </>
  )
}

export default LightBox;
