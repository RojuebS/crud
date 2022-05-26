import * as S from "./styles";

export const LightBox = (props) => {

  const { children, active } = props;

  return (
    <>
      <S.BackgroundBox />
      <S.ContainerBox>
        <S.Box active={active}>
          <S.Closed>

          </S.Closed>
          {children}
          dasdsadas
        </S.Box>
      </S.ContainerBox>
    </>
  )
}

export default LightBox;
