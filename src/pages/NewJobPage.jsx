import styled from "@emotion/styled";

import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/Input-textarea";
import SelectInput from "../components/inputs/inputSelect";
import Price from "../components/inputs/input-price";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import { useState, useCallback } from "react";

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
  const [job, setJobs] = useState({});
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setJobs({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const {
      title,
      // category,
      // job_type,
      // salary,
      mandatory,
      optional_req,
      about,
    } = e.target.elements;

    const updatedJob = {
      title: title.value,
      // category: category.value,
      // job_type: job_type.value,
      // salary: salary.value,
      mandatory: mandatory.value,
      optional_req: optional_req.value,
      about: about.value,
    };

    console.log(updatedJob);
    // try {
    //   await updateRecruiter(updatedRecruiter)
    //     .then(console.log("Recruiter updated successfully."))
    //     .catch(console.log);
    // } catch (error) {
    //   console.error("Error updating recruiter:", error);
    // }
  }, []);

  // console.log(recruiter);

  return (
    <Container>
      <Profile>Create new job posting</Profile>
      <form onSubmit={handleSubmit}>
        <MainContainer>
          <Subtitle>Main Information</Subtitle>
          <InputContainer>
            <Input
              label={"Job Title"}
              placeholder={"Software Engineer"}
              name={"title"}
              value={job.title ? job.title : ""}
              onChange={handleChange}
            />
            <SelectInput
              label={"Job Category"}
              placeholder={"Select or create a category"}
              name={"category"}
              value={job.category ? job.category : ""}
              onChange={(e) => setCategory(e.target.value)}
            />
            <SelectInput
              label={"Type"}
              placeholder={"Select a type"}
              name={"type"}
              value={job.type ? job.type : ""}
              onChange={handleChange}
            />
            <Price
              label={"Salary Range"}
              name={"salary"}
              value={job.salary ? job.salary : ""}
              onChange={handleChange}
            />
          </InputContainer>
        </MainContainer>
        <AdditionalContainer>
          <Subtitle>Additional Information</Subtitle>
          <TextArea
            label={"About the Job Position"}
            placeholder={
              "Describe the main functions and characteristics of your job position"
            }
            name={"about"}
            value={job.about ? job.about : ""}
            onChange={handleChange}
          />
          <TextArea
            label={"Mandatory Requirements"}
            placeholder={"List each mandatory requirement in a new line"}
            name={"mandatory"}
            value={job.mandatory ? job.mandatory : ""}
            onChange={handleChange}
          />
          <TextArea
            label={"Optional Requirements"}
            placeholder={"List each optional requirement in a new line"}
            name={"optional_req"}
            value={job.optional_req ? job.optional_req : ""}
            onChange={handleChange}
          />
        </AdditionalContainer>
        <Button type="primary" size={"sm"}>
          Post this job
        </Button>
      </form>
    </Container>
  );
}

export default NewJob;
