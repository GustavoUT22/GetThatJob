import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { colors } from "../styles";
import current1 from "../assets/images/current1.svg"
import done1 from "../assets/images/done1.svg"
import done2 from "../assets/images/done2.svg"
import pending2 from "../assets/images/pending2.svg"
import current2 from "../assets/images/current2.svg"
import current3 from "../assets/images/current3.svg"
import pending3 from "../assets/images/pending3.svg"
import RecruiterForm from "./RecruiterForm";
import ProfessionalForm from "./ProfessionalForm";


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

const StatusLabel = styled.label`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

const InfoLabel = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
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
      {img: {1: current1, 2: done1, 3: done1 }, status: status[0], label: "Login Information"}, 
      {img: {1: pending2, 2: current2, 3: done2}, status: status[1], label: "Personal Information"}, 
      {img: {1: pending3, 2: pending3, 3: current3}, status: status[2], label: "Professional Information"}
    ],
    "recruiter": [
      {img: {1: current1, 2: done1} , status: status[0], label: "Login Information"}, 
      {img: {1: pending2, 2: current2}, status: status[1], label: "Company Information"}
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
            <img src={info.img[status.step]} alt={info.label + " icon"}/>
            <StepInfo style={{opacity: info.status === "Pending" ? "50%" : "1"}}>
              <StatusLabel>{info.status}</StatusLabel>
              <InfoLabel>{info.label}</InfoLabel>
            </StepInfo>
          </Step>
        ))}
      </Steps>
      {selectedRole === "recruiter" ? <RecruiterForm step={status.step} setStatus={setStatus}/> : <ProfessionalForm step={status.step} setStatus={setStatus}/>}
    </>
  )
}