import styled from "@emotion/styled";

import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/Input-textarea";
import SelectInput from "../components/inputs/inputSelect";
import Price from "../components/inputs/input-price";
import { typography } from "../styles/typography";
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

const MainContainer = styled.div`
  display: flex;
  width: 18.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

const AdditionalContainer = styled.div`
  display: flex;
  width: 23.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
  width: 18.75rem;
`;

function NewJob() {
  return (
    <Container>
      <Profile>Create new job posting</Profile>
      <MainContainer>
        <Subtitle>Main Information</Subtitle>
        <InputContainer>
          <Input
            label={"Job Title"}
            placeholder={"Software Engineer"}
            name={"jobtitle"}
          />
          <SelectInput
            label={"Job Category"}
            placeholder={"Select or create a category"}
            name={"category"}
          />
          <SelectInput
            label={"Type"}
            placeholder={"Select a type"}
            name={"type"}
          />
          <Price label={"Salary Range"} name={"salary"} />
        </InputContainer>
      </MainContainer>
      <AdditionalContainer>
        <Subtitle>Additional Information</Subtitle>
        <TextArea
          label={"About the Job Position"}
          placeholder={
            "Describe the main functions and characteristics of your job position"
          }
        />
        <TextArea
          label={"Mandatory Requirements"}
          placeholder={"List each mandatory requirement in a new line"}
        />
        <TextArea
          label={"Optional Requirements"}
          placeholder={"List each optional requirement in a new line"}
        />
      </AdditionalContainer>
      <Button type="primary" size={"sm"}>
        Post this job
      </Button>
    </Container>
  );
}

export default NewJob;
