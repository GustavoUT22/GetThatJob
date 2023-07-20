import { useState } from "react";
import styled from "@emotion/styled";
import {RiArrowRightSLine} from "react-icons/ri"
import {RiArrowLeftSLine} from "react-icons/ri"

import Input from "./inputs/Input";
import TextArea from "./inputs/Input-textarea";
import Button from "../components/buttons/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: auto;
  `

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: auto;
`

const Label = styled.label`
  width: 360px
`

const ButtonSection = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  gap: 16px;
`

export default function ProfessionalForm({step, setStatus}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    phone: "",
    birthdate: "",
    linkedin: "",
    title: "",
    exp: "",
    education: "",
  })

  const { email, password, passwordConfirmation, name, phone, birthdate, linkedin, title, exp, education } = formData;

  function handleSubmit(event) {
    event.preventDefault()
    if (password === passwordConfirmation) {

      switch (step) {
        case 1:
          setStatus({
            step: 2,
            0: "Done!",
            1: "In Progress",
            2: "Pending",
          })
        break;
        case 2:
          setStatus({
            step: 3, 
            0: "Done!",
            1: "Done!",
            2: "In Progress",
          })
        break;
        default:
          break;
      }
    } else {
      console.log("Passwords doesn't match.")
    }
  }

  function handlePrevious(event) {
    event.preventDefault()

    setStatus({
      step: 2,
      0: "Done!",
      1: "In Progress",
      2: "Pending",
    })
  }

  function handleFinish(event) {
    event.preventDefault()

    Object.entries(formData).map(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }

  function handleSkip(event) {
    event.preventDefault()

    console.log(email, password, passwordConfirmation)
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: name === "name" || name === "title" || name === "exp" || name === "education"  ? value : value.trim(),
    });
  }
  
  let form
  switch (step) {
    case 1:
     form =
     <Form onSubmit={handleSubmit}>
        <InfoSection>
          <Input name="email" type="email" value={email} onChange={handleChange} placeholder={"some.user@mail.com"} label={"email"} required/>
          <Input type="password" name="password" value={password} onChange={handleChange} placeholder={"******"} label={"password"} required/>
          <Input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleChange} placeholder={"******"} label={"password confirmation"} required/>
        </InfoSection>
        <Button style={{alignSelf: "center", flexDirection: "row-reverse"}} type={"primary"} size={"sm"} icon={<RiArrowRightSLine/>}>Next</Button>
      </Form> 
      break;
      case 2:
        form =
      <Form>
        <Label>You can complete this information later but we recommend you to do it now</Label>
        <InfoSection>
          <Input name="name" value={name} onChange={handleChange} placeholder={"John Doe"} label={"name"}/>
          <Input name="phone" type={"tel"} value={phone} onChange={handleChange} placeholder={"+XXXXXXX"} label={"phone"}/>
          <Input name="birthdate" type={"date"} value={birthdate} onChange={handleChange} placeholder={"Pick a date"} label={"birthdate"}/>
          <Input name="linkedin" value={linkedin} onChange={handleChange} placeholder={"https://www.linkedin.com/in/username"} label={"linkedin url"}/>
        </InfoSection>
        <ButtonSection>
          <Button type={"secondary"} size={"sm"} onClick={handleSkip}>skip this!</Button>
          <Button style={{flexDirection: "row-reverse"}} type={"primary"} size={"sm"} onClick={handleSubmit} icon={<RiArrowRightSLine/>}>next</Button>
        </ButtonSection>
      </Form>
      break;
      case 3:
        form =
      <Form>
        <Label>You can complete this information later but we recommend you to do it now</Label>
        <InfoSection>
          <Input name="title" value={title} onChange={handleChange} placeholder={"Mechanical administrator..."} label={"title"}/>
          <TextArea name="exp" value={exp} onChange={handleChange} placeholder={"Worked 6 years in a bitcoin farm until I decided to change my life...."} label={"professional experience"}/>
          <TextArea name="education" value={education} onChange={handleChange} placeholder={"Major in life experiences with a PHD in procrastination..."} label={"education"}/>
        </InfoSection>
        <ButtonSection>
          <Button type={"primary"} size={"sm"} onClick={handlePrevious} icon={<RiArrowLeftSLine/>}>previous</Button>
          <Button type={"secondary"} size={"sm"} onClick={handleSkip}>skip this!</Button>
          <Button style={{flexDirection: "row-reverse"}} type={"primary"} size={"sm"} onClick={handleFinish} icon={<RiArrowRightSLine/>}>next</Button>
        </ButtonSection>
      </Form>
      break;
    default:
      break;
  }

  return form;
}