import { useState } from "react";
import styled from "@emotion/styled";
import {RiArrowRightSLine} from "react-icons/ri"

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

export default function RecruiterForm({step, setStatus}) {
  const [recFormData, setRecFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    companyName: "",
    companyWebsite: "",
    about: "",
  })

  function handleSubmit(event) {
    event.preventDefault()
    if (recFormData.password === recFormData.passwordConfirmation) {

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

  function handleFinish(event) {
    event.preventDefault()

    Object.entries(recFormData).map(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }

  function handleSkip(event) {
    event.preventDefault()

    setRecFormData({
      ...recFormData,
      companyWebsite: "",
      about: "",
    })

    Object.entries(recFormData).map(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }

  function handleChange(event) {
    const { name, value } = event.target

    setRecFormData({
      ...recFormData,
      [name]: name === "companyName" || name ==="about" ? value : value.trim(),
    });
  }
  
  let form
  switch (step) {
    case 1:
     form =
     <Form onSubmit={handleSubmit}>
        <InfoSection>
          <Input name="companyName" value={recFormData.companyName} onChange={handleChange} placeholder={"some.user@mail.com"} label={"company name"} required/>
          <Input name="email" type="email" value={recFormData.email} onChange={handleChange} placeholder={"some.user@mail.com"} label={"email"} required/>
          <Input type="password" name="password" value={recFormData.password} onChange={handleChange} placeholder={"******"} label={"password"} required/>
          <Input type="password" name="passwordConfirmation" value={recFormData.passwordConfirmation} onChange={handleChange} placeholder={"******"} label={"password confirmation"} required/>
        </InfoSection>
        <Button style={{alignSelf: "center", flexDirection: "row-reverse"}} type={"primary"} size={"sm"} icon={<RiArrowRightSLine/>}>Next</Button>
      </Form> 
      break;
      case 2:
        form =
      <Form>
        <Label>You can complete this information later but we recommend you to do it now</Label>
        <InfoSection>
          <Input name="companyWebsite" type="url" value={recFormData.website} onChange={handleChange} placeholder={"https://www.mycompany.sa"} label={"company website"}/>
          <TextArea name="about" value={recFormData.about} onChange={handleChange} placeholder={"My Company SA has the vision to change the way how..."} label={"About the company"}/>
        </InfoSection>
        <ButtonSection>
          <Button type={"secondary"} size={"sm"} onClick={handleSkip}>skip this!</Button>
          <Button style={{flexDirection: "row-reverse"}} type={"primary"} size={"sm"} onClick={handleFinish} icon={<RiArrowRightSLine/>}>Finish</Button>
        </ButtonSection>
      </Form>
      break;
    default:
      break;
  }

  return form;
}