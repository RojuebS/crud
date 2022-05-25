import * as S from "./styles";
import Logo from "../../assets/uol.png"

function Header() {
  return (
    <S.Header>
      < img src={Logo} alt="Logo UOL" />
    </S.Header >
  );
}

export default Header;
