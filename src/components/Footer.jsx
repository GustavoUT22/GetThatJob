import rubyLogo from "../assets/footer/ruby-logo.svg";
import reactLogo from "../assets/footer/react-logo.svg";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  width: auto;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #373737;
  border-top: 1px solid #bf5f82;
  font-size: 14px;
`;

const FooterContent = styled.div`
  width: 1200px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 31px;
  box-sizing: border-box;
  font-family: "Montserrat";
`;

const Text = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;
    gap: 8px;
`;

const SourceCodes = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}`;

const SourceCodeContainer = styled.div``;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Text>© 2023 - Get That Job</Text>
        <SourceCodeContainer>
          <Text>Source Code</Text>
          <SourceCodes>
            <Text>
              <img src={rubyLogo} alt="icon" />
              Ruby on Rails REST API
            </Text>
            <Text>
              <img src={reactLogo} alt="icon" />
              React Responsive SPA
            </Text>
          </SourceCodes>
        </SourceCodeContainer>
        <Text>Codeable - Cohort X Final Project</Text>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
