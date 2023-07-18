import styled from "@emotion/styled";

import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/Input-textarea";
import { typography } from "../styles/typography";
import { fonts } from "../styles/typography";
import { colors } from "../styles/colors";

const Container = styled.div`
  display: block;
  width: 960px;
  height: 95.5vh;
  margin-top: 2rem;
  margin-left: 7.5rem;
  margin-right: 7.5rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.pink.light};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.pink.pink};
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Profile = styled.h1`
  ${typography.head.md};
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  width: 23.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

const InputFile = styled.input`
  color: ${colors.gray.dark};
  padding-top: 0;
  ${typography.body.sm};
`;

const UploadFileContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

const InputLabel = styled.label`
  ont-family: ${fonts.secondary};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
`;

const Caption = styled.p`
  ${typography.caption};
  color: ${colors.gray.light};
`;

function RecruiterProfile() {
  return (
    <Container>
      <Profile>Profile</Profile>
      <UploadFileContainer>
        <InputLabel>Company Logo</InputLabel>
        <InputFile type="file" />
        <Caption>PNG, JPG, IMG</Caption>
      </UploadFileContainer>
      <InputContainer>
        <Input label={"Company Email"} type="email" name={"companyemail"} />
        <Input label={"Company Name"} name={"companyname"} />
        <Input label={"Company Website"} type="url" name={"website"} />
        <TextArea label={"About The Company"} />
      </InputContainer>
      <Button type="primary" size={"sm"}>
        Update Profile
      </Button>
    </Container>
  );
}

export default RecruiterProfile;
