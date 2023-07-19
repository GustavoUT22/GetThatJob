import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { colors } from "../styles";
import step1 from "../assets/images/step1.svg"
import step2 from "../assets/images/step2.svg"
import step3 from "../assets/images/step3.svg"
import RecruiterForm from "./RecruiterForm";


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

export default function SignupForm() {
  function handleRoleChange(event) {
    setSelectedRole(event.target.value)
  }

  const [selectedRole, setSelectedRole] = useState("professional");
  const [status, setStatus] = useState({
    step: 1,
    0: "In Progress",
    1: "Pending",
    2: "Pending",
  })
  
  const stepsInfo = {
    "professional": [
      {img: step1, status: status[0], label: "Login Information"}, 
      {img: step2, status: status[1], label: "Personal Information"}, 
      {img: step3, status: status[2], label: "Professional Information"}
    ],
    "recruiter": [
      {img: step1, status: status[0], label: "Login Information"}, 
      {img: step2, status: status[1], label: "Company Information"}
    ]
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
      {selectedRole === "recruiter" ? <RecruiterForm step={status.step} setStatus={setStatus}/> : <p>hola</p>}
    </>
  )
}