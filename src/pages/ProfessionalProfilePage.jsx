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

const Subtitle = styled.h2`
  ${typography.head.sm};
`;

const PersonalContainer = styled.div`
  display: flex;
  width: 23.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Note = styled.div`
  font-family: ${fonts.secondary};
  color: ${colors.gray.gray};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.025rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProfessionalContainer = styled.div`
  display: flex;
  width: 23.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
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
`;

const InputLabel = styled.label`
  font-family: ${fonts.secondary};
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

const InputContainer = styled.div`
  width: 18.75rem;
`;

function ProfessionalProfile() {
  return (
    <Container>
      <Profile>Profile</Profile>
      <PersonalContainer>
        <Subtitle>Personal Information</Subtitle>
        <InputContainer>
          <Input label={"Email"} type="email" name={"email"} />
          <Input label={"Name"} name={"name"} />
          <Input label={"Phone"} type="phone" name={"phone"} />
          <Input label={"Birthdate"} type="date" name={"date"} />
          <Input label={"LinkedIn URL"} type="url" name={"linkedin"} />
        </InputContainer>
      </PersonalContainer>
      <ProfessionalContainer>
        <Subtitle>Professional Information</Subtitle>
        <Note>
          Changes made here will be reflected in your future applications
        </Note>
        <InputContainer>
          <Input label={"Title"} name={"title"} />
        </InputContainer>
        <TextArea label={"Professional Experience"} />
        <TextArea label={"Education"} />

        <InputLabel>Upload/Update Your CV</InputLabel>

        <UploadFileContainer>
          <InputFile type="file" />
        </UploadFileContainer>

        <Caption>Only PDF. Max size 5MB</Caption>
      </ProfessionalContainer>
      <Button type="primary" size={"sm"}>
        Save changes
      </Button>
    </Container>
  );
}

export default ProfessionalProfile;
