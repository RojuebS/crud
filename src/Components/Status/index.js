import * as S from "./styles";

const Status = ({ status }) => {
  return (
    <S.ContentStatus>
      <S.Status background={status.background} />
      {status.name}
    </S.ContentStatus>
  );
}

export default Status;
