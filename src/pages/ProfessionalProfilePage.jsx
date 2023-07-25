import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../services/professional-services";

import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/Input-textarea";
import { typography } from "../styles/typography";
import { fonts } from "../styles/typography";
import { colors } from "../styles/colors";
import InputFile from "../components/inputs/InputFile";

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
    background-color: none;
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

const InputContainer = styled.div`
  width: 18.75rem;
`;

function ProfessionalProfile() {
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setUser(response);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      name,
      phone,
      birth_date,
      linkedin,
      professional_title,
      experience,
      education,
      file,
    } = e.target.elements;

    const formFile = new FormData();
    formFile.append("file", file);

    const updatedUser = {
      email: email.value,
      name: name.value,
      phone: phone.value,
      birth_date: birth_date.value,
      linkedin: linkedin.value,
      professional_title: professional_title.value,
      experience: experience.value,
      education: education.value,
      // file: formFile,
    };

    console.log("updatedUser");

    try {
      await updateUser(updatedUser)
        .then(console.log("User updated successfully."))
        .catch(console.log);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  console.log(user);
  return (
    <Container>
      <Profile>Profile</Profile>

      <form onSubmit={handleSubmit}>
        <PersonalContainer>
          <Subtitle>Personal Information</Subtitle>
          <InputContainer>
            <Input
              label={"Email"}
              type="email"
              name={"email"}
              value={user.email ? user.email : ""}
              onChange={handleChange}
            />
            <Input
              label={"Name"}
              name={"name"}
              value={user.name ? user.name : ""}
              onChange={handleChange}
            />
            <Input
              label={"Phone"}
              type="phone"
              name={"phone"}
              value={user.phone ? user.phone : ""}
              onChange={handleChange}
            />
            <Input
              label={"Birthdate"}
              type="date"
              name={"birth_date"}
              value={user.birth_date ? user.birth_date : ""}
              onChange={handleChange}
            />
            <Input
              label={"LinkedIn URL"}
              type="url"
              name={"linkedin"}
              value={user.linkedin ? user.linkedin : ""}
              onChange={handleChange}
            />
          </InputContainer>
        </PersonalContainer>
        <ProfessionalContainer>
          <Subtitle>Professional Information</Subtitle>
          <Note>
            Changes made here will be reflected in your future applications
          </Note>
          <InputContainer>
            <Input
              label={"Title"}
              name={"professional_title"}
              value={user.professional_title ? user.professional_title : ""}
              onChange={handleChange}
            />
          </InputContainer>
          <TextArea
            label={"Professional Experience"}
            value={user.experience ? user.experience : ""}
            name="experience"
            onChange={handleChange}
          />
          <TextArea
            label={"Education"}
            name="education"
            value={user.education ? user.education : ""}
            onChange={handleChange}
          />

          <InputFile
            id={"updCV"}
            name={"updCV"}
            label={"Upload/Update Your CV"}
            caption={"Only PDF. Max size 5MB"}
            onChange={handleFileChange}
            file={file}
          ></InputFile>
        </ProfessionalContainer>

        <Button type="primary" size={"sm"}>
          Save changes
        </Button>
      </form>
    </Container>
  );
}

export default ProfessionalProfile;
