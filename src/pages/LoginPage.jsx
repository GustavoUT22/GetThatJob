import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  gap: 8px;
`

const Main = styled.main`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray.bg_dark}
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  gap: 2px;
`

export default function LoginPage() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log(selectedRole, formData.email, formData.password)
  }
  
  function handleRoleChange(event) {
    setSelectedRole(event.target.value)
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData, [name]: value.trim(),
    })
  }

  const [selectedRole, setSelectedRole] = useState("professional")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  return (
    <>
      <Container>
        <header>Get That Job logo</header>
        <Main>
          <Section>
            <h1>Welcome back</h1>
            <p>Login to your account as...</p>
            <form onSubmit={handleSubmit}>
              <div>
                <input id="professional" name="role" value="professional" type="radio" checked={selectedRole === "professional"} onChange={handleRoleChange} hidden/>
                <label htmlFor="professional">Professional</label>
                <input id="recruiter" name="role" value="recruiter" type="radio" checked={selectedRole === "recruiter"} onChange={handleRoleChange} hidden/>
                <label htmlFor="recruiter">Recruiter</label>
              </div>
              <div>
                <label htmlFor="email">EMAIL</label>
                <input id="email" type="text" name="email" value={formData.email} onChange={handleChange}/>
                <label htmlFor="password">PASSWORD</label>
                <input id="password" type="password" name="password" value={formData.password} onChange={handleChange}/>
              </div>
              <button type="submit">Login</button>
            </form>  
          </Section>
        </Main>
      </Container>
    </>
  )
}

