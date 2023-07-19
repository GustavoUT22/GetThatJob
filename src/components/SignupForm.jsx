import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { colors } from "../styles";
import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";
import step1 from "../assets/images/step1.svg"
import step2 from "../assets/images/step2.svg"
import step3 from "../assets/images/step3.svg"

const RoleSection = styled.div`
  display: flex;
  gap: 12px;
  min-height: 15px;
`

const Steps = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const Step = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`

const StepInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  flex-wrap: wrap;
`

const Label = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  `
  
  const InputContainer = styled.div`
  display: flex;
  width: fit-content;
  padding: 0 8px;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  opacity: ${props => props.selectedRole ? "100%" : "50%"};
`

const Rectangle = styled.div`
  height: 2px;
  background-color: ${props => props.selectedRole ? colors.pink.pink : colors.gray.light};
  align-self: stretch;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  gap: 16px;
  `
  
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export default function SignupForm() {
  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.passwordConfirmation) {
      console.log(selectedRole, selectedRole === "recruiter" ? formData.companyName : null, formData.email, formData.password, formData.passwordConfirmation)
      setFormData({
        email: "",
        password: "",
        passwordConfirmation: "",
        companyName: "",
      })

      switch (status.step) {
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
            ...status, 
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
  
  function handleRoleChange(event) {
    setSelectedRole(event.target.value)
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: name === "companyName" ? value : value.trim(),
    });
  }

  const [selectedRole, setSelectedRole] = useState("professional");
  const [status, setStatus] = useState({
    step: 1,
    0: "In Progress",
    1: "Pending",
    2: "Pending",
  })
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    companyName: "",
  })

  const stepsInfo = {
    "professional": [{img: step1, status: status[0], label: "Login Information"}, {img: step2, status: status[1], label: "Personal Information"}, {img: step3, status: status[2], label: "Professional Information"}],
    "recruiter": [{img: step1, status: status[0], label: "Login Information"}, {img: step2, status: status[1], label: "Company Information"}]
  }

  useEffect(() => (
    setStatus({
      step: 1,
      0: "In Progress",
      1: "Pending",
      2: "Pending",
    })
  ), [selectedRole])

  return (
    <>
      <RoleSection>
        <InputContainer selectedRole={selectedRole === "professional"}>
          <input id="professional" name="role" value="professional" type="radio" checked={selectedRole === "professional"} onChange={handleRoleChange} hidden/>
          <Label htmlFor="professional">professional</Label>
          <Rectangle selectedRole={selectedRole === "professional"} />
        </InputContainer>
        <InputContainer selectedRole={selectedRole === "recruiter"}>
          <input id="recruiter" name="role" value="recruiter" type="radio" checked={selectedRole === "recruiter"} onChange={handleRoleChange} hidden/>
          <Label htmlFor="recruiter">recruiter</Label>
          <Rectangle selectedRole={selectedRole === "recruiter"}/>
        </InputContainer>
      </RoleSection>
      <Steps>
        {stepsInfo[selectedRole].map((info, index) => (
          <Step key={index}>
            <img src={info.img} alt={info.label + " icon"}/>
            <StepInfo>
              <label>{info.status}</label>
              <label>{info.label}</label>
            </StepInfo>
          </Step>
        ))}
      </Steps>
      <Form onSubmit={handleSubmit}>
        <InfoSection>
          {selectedRole === "recruiter" ? <Input name="companyName" value={formData.companyName} onChange={handleChange} placeholder={"some.user@mail.com"} label={"company name"}/> : null}
          <Input name="email" value={formData.email} onChange={handleChange} placeholder={"some.user@mail.com"} label={"email"}/>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder={"******"} label={"password"}/>
          <Input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} placeholder={"******"} label={"password confirmation"}/>
        </InfoSection>
        <Button style={{alignSelf: "center"}} type={"primary"} size={"sm"}>Next</Button>
      </Form> 
    </>
  )
}