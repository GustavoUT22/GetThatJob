import { useState } from "react";
import styled from "@emotion/styled";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

import Input from "./inputs/Input";
import TextArea from "./inputs/Input-textarea";
import Button from "../components/buttons/Button";
import InputFile from "./inputs/InputFile";
import {
  createUser,
  updateSignupUser,
  updateUser,
} from "../services/professional-services";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth-context";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: auto;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: auto;
`;

const Label = styled.label`
  width: 360px;
`;

const ButtonSection = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  gap: 16px;
`;

export default function ProfessionalForm({ step, setStatus }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    phone: "",
    birth_date: "",
    linkedin: "",
    title: "",
    experience: "",
    education: "",
    file: null,
  });

  const {
    email,
    password,
    passwordConfirmation,
    name,
    phone,
    birth_date,
    linkedin,
    title,
    experience,
    education,
    file,
  } = formData;

  async function handleSubmit(event) {
    event.preventDefault();

    if (password === passwordConfirmation) {
      switch (step) {
        case 1:
          setStatus({
            step: 2,
            0: "Done!",
            1: "In Progress",
            2: "Pending",
          });
          const userData = {
            email,
            password,
          };
          // Add fetch to create new User
          console.log(userData);
          try {
            await createUser(userData)
              .then(console.log("User created successfully."))
              .catch(console.log);
          } catch (error) {
            console.error("Error creating user:", error);
          }

          // console.log(userData);
          break;
        case 2:
          setStatus({
            step: 3,
            0: "Done!",
            1: "Done!",
            2: "In Progress",
          });
          const data = {
            name,
            phone,
            birth_date,
            linkedin,
          };

          const userData1 = Object.keys(data).reduce((acc, key) => {
            if (formData[key] !== "") {
              acc[key] = formData[key];
            }
            return acc;
          }, {});
          // Add fetch to update user data using userData1
          console.log(userData1);
          try {
            await updateSignupUser(userData1)
              .then(console.log("User info saved successfully."))
              .catch(console.log);
          } catch (error) {
            console.error("Error saving user info:", error);
          }
          break;
        default:
          break;
      }
    } else {
      console.log("Passwords doesn't match.");
    }
  }

  function handlePrevious(event) {
    event.preventDefault();

    setStatus({
      step: 2,
      0: "Done!",
      1: "In Progress",
      2: "Pending",
    });
  }

  function handleFinish(event) {
    event.preventDefault();

    const data = {
      title,
      experience,
      education,
      file,
    };

    const userData = Object.keys(data).reduce((acc, key) => {
      if (formData[key] !== "" && formData[key] !== null) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    const formFile = new FormData();
    formFile.append("file", file);

    userData.file = formFile;
    console.log(userData);

    const credentials = { email, password };
    console.log(credentials);
    login(credentials);
  }

  function handleSkip(event) {
    event.preventDefault();

    switch (step) {
      case 2:
        setStatus({
          step: 3,
          0: "Done!",
          1: "Done!",
          2: "In Progress",
        });
        setFormData({
          ...formData,
          name: "",
          phone: "",
          birthdate: "",
          linkedin: "",
        });
        break;
      case 3:
        setFormData({
          ...formData,
          title: "",
          exp: "",
          education: "",
          file: null,
        });
        // redirect to user main page
        const credentials = { email, password };
        console.log(credentials);
        login(credentials);
        break;
      default:
        break;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]:
        name === "name" ||
        name === "title" ||
        name === "exp" ||
        name === "education"
          ? value
          : value.trim(),
    });
  }

  function handleFileChange(event) {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  }

  let form;
  switch (step) {
    case 1:
      form = (
        <Form onSubmit={handleSubmit}>
          <InfoSection>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder={"some.user@mail.com"}
              label={"email"}
              required
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder={"******"}
              label={"password"}
              required
            />
            <Input
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={handleChange}
              placeholder={"******"}
              label={"password confirmation"}
              required
            />
          </InfoSection>
          <Button
            style={{ alignSelf: "center", flexDirection: "row-reverse" }}
            type={"primary"}
            size={"sm"}
            icon={<RiArrowRightSLine />}
          >
            Next
          </Button>
        </Form>
      );
      break;
    case 2:
      form = (
        <Form>
          <Label>
            You can complete this information later but we recommend you to do
            it now
          </Label>
          <InfoSection>
            <Input
              name="name"
              value={name}
              onChange={handleChange}
              placeholder={"John Doe"}
              label={"name"}
            />
            <Input
              name="phone"
              type={"tel"}
              value={phone}
              onChange={handleChange}
              placeholder={"+XXXXXXX"}
              label={"phone"}
            />
            <Input
              name="birth_date"
              type={"date"}
              value={birth_date}
              onChange={handleChange}
              placeholder={"Pick a date"}
              label={"birthdate"}
            />
            <Input
              name="linkedin"
              value={linkedin}
              onChange={handleChange}
              placeholder={"https://www.linkedin.com/in/username"}
              label={"linkedin url"}
            />
          </InfoSection>
          <ButtonSection>
            <Button type={"secondary"} size={"sm"} onClick={handleSkip}>
              skip this!
            </Button>
            <Button
              style={{ flexDirection: "row-reverse" }}
              type={"primary"}
              size={"sm"}
              onClick={handleSubmit}
              icon={<RiArrowRightSLine />}
            >
              next
            </Button>
          </ButtonSection>
        </Form>
      );
      break;
    case 3:
      form = (
        <Form>
          <Label>
            You can complete this information later but we recommend you to do
            it now
          </Label>
          <InfoSection>
            <Input
              name="title"
              value={title}
              onChange={handleChange}
              placeholder={"Mechanical administrator..."}
              label={"title"}
            />
            <TextArea
              name="experience"
              value={experience}
              onChange={handleChange}
              placeholder={
                "Worked 6 years in a bitcoin farm until I decided to change my life...."
              }
              label={"professional experience"}
            />
            <TextArea
              name="education"
              value={education}
              onChange={handleChange}
              placeholder={
                "Major in life experiences with a PHD in procrastination..."
              }
              label={"education"}
            />
            <InputFile
              id={"cv"}
              name={"cv"}
              label={"Upload/Update your CV"}
              caption={"Only PDF. Max size 5MB"}
              onChange={handleFileChange}
              file={file}
            ></InputFile>
          </InfoSection>
          <ButtonSection>
            <Button
              type={"primary"}
              size={"sm"}
              onClick={handlePrevious}
              icon={<RiArrowLeftSLine />}
            >
              previous
            </Button>
            <Button type={"secondary"} size={"sm"} onClick={handleSkip}>
              skip this!
            </Button>
            <Button
              style={{ flexDirection: "row-reverse" }}
              type={"primary"}
              size={"sm"}
              onClick={handleFinish}
              icon={<RiArrowRightSLine />}
            >
              finish
            </Button>
          </ButtonSection>
        </Form>
      );
      break;
    default:
      break;
  }

  return form;
}
