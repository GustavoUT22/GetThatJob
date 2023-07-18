import { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "../styles";
import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";

const RoleSection = styled.div`
  display: flex;
  gap: 12px;
  min-height: 15px;
`

const Label = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  opacity: ${props => props.selectedRole ? "100%" : "50%"};
`

const InputContainer = styled.div`
  display: flex;
  width: fit-content;
  padding: 0 8px;
  gap: 6px;
  flex-direction: column;
  align-items: center;
`

const Rectangle = styled.div`
  height: 2px;
  background-color: ${props => props.selectedRole ? colors.pink.pink : colors.gray.light};
  opacity: ${props => props.selectedRole ? "100%" : "50%"};
  align-self: stretch;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    companyName: "",
  })

  return (
    <Form onSubmit={handleSubmit}>
      <RoleSection>
        <InputContainer>
          <input id="professional" name="role" value="professional" type="radio" checked={selectedRole === "professional"} onChange={handleRoleChange} hidden/>
          <Label selectedRole={selectedRole === "professional"} htmlFor="professional">professional</Label>
          <Rectangle selectedRole={selectedRole === "professional"} />
        </InputContainer>
        <InputContainer>
          <input id="recruiter" name="role" value="recruiter" type="radio" checked={selectedRole === "recruiter"} onChange={handleRoleChange} hidden/>
          <Label selectedRole={selectedRole === "recruiter"} htmlFor="recruiter">recruiter</Label>
          <Rectangle selectedRole={selectedRole === "recruiter"}/>
        </InputContainer>
      </RoleSection>
      <InfoSection>
        {selectedRole === "recruiter" ? <Input name="companyName" value={formData.companyName} onChange={handleChange} placeholder={"some.user@mail.com"} label={"company name"}/> : null}
        <Input name="email" value={formData.email} onChange={handleChange} placeholder={"some.user@mail.com"} label={"email"}/>
        <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder={"******"} label={"password"}/>
        <Input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} placeholder={"******"} label={"password confirmation"}/>
      </InfoSection>
      <Button style={{alignSelf: "flex-end"}} type={"primary"} size={"sm"}>Login</Button>
    </Form> 
  )
}