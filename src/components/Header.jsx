import getThatJobLogo from "../assets/header/gtj-logo.png";
import signupLogo from "../assets/header/signup-logo.svg";
import loginLogo from "../assets/header/login-logo.svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const HeaderWrapper = styled.div`
  width: auto;
  height: 8vh;
  padding: 0 32px;
  z-index: 10;
  position: relative;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContent = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.div`
  width: auto;
  height: 40px;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid #cf4f8fb1;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: gray;
  background-color: transparent;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src={getThatJobLogo}
          className="gtj-logo"
          alt="Logo de GetThatJob"
        />
        <ButtonContainer>
          <Button onClick={() => navigate("/signup")}>
            <img src={signupLogo} alt="icon" />
            SIGN UP
          </Button>
          <Button onClick={() => navigate("/login")}>
            <img src={loginLogo} alt="icon" />
            LOGIN
          </Button>
        </ButtonContainer>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
