import styled from "@emotion/styled";

import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import { typography } from "../styles/typography";
import { fonts } from "../styles/typography";
import { colors } from "../styles/colors";

const Container = styled.div`
  display: block;
  width: 960px;
  margin-top: 2rem;
  margin-left: 7.5rem;
  margin-right: 7.5rem;
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
const InputLabel = styled.label`
  ont-family: ${fonts.secondary};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
`;

const StyledTextArea = styled.textarea`
  display: flex;
  width: 23.75rem;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${colors.pink.light};
  color: ${colors.gray.dark};
  :hover {
    background-color: ${colors.gray.bg_light};
  }
  :focus {
    border: 2px solid ${colors.pink.pink};
  }

  ::placeholder {
    color: ${colors.gray.light};
  }
`;

const Caption = styled.p`
  ${typography.caption};
  color: ${colors.gray.light};
`;

function ProfessionalProfile() {
  return (
    <Container>
      <Profile>Profile</Profile>
      <PersonalContainer>
        <Subtitle>Personal Information</Subtitle>
        <Input label={"Email"} type="email" name={"email"} />
        <Input label={"Name"} name={"name"} />
        <Input label={"Phone"} type="phone" name={"phone"} />
        <Input label={"Birthdate"} type="date" name={"date"} />
        <Input label={"LinkedIn URL"} type="url" name={"linkedin"} />
      </PersonalContainer>
      <ProfessionalContainer>
        <Subtitle>Professional Information</Subtitle>
        <Note>
          Changes made here will be reflected in your future applications
        </Note>
        <Input label={"Title"} name={"title"} />
        <InputLabel>Professional Experience</InputLabel>
        <StyledTextArea />
        <InputLabel>Education</InputLabel>
        <StyledTextArea />
        <InputLabel>Upload/Update Your CV</InputLabel>
        <InputFile type="file" />
        <Caption>Only PDF. Max size 5MB</Caption>
      </ProfessionalContainer>
      <Button type="primary" size={"sm"}>
        Save changes
      </Button>
    </Container>
  );
}

export default ProfessionalProfile;
