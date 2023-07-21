import { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "../styles";
import { typography } from "../styles";
import Header from "../components/Header";
import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";
import person from "../assets/images/people/login-person.svg";
// import { loginRecruiter } from "../services/recruiter-session";
import { useAuth } from "../context/auth-context";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.gray.bg_light};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50.25px 47.69px 40.31px 19.87px;
  gap: 18px;
`;

const RoleSection = styled.div`
  display: flex;
  gap: 12px;
  min-height: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  ${typography.head.lg};
  width: 22.4375rem;
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  letter-spacing: 0.15px;
`;
const Label = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  opacity: ${(props) => (props.selectedRole ? "100%" : "50%")};
`;

const InputContainer = styled.div`
  display: flex;
  width: fit-content;
  padding: 0 8px;
  gap: 6px;
  flex-direction: column;
  align-items: center;
`;

const Man = styled.img`
  height: 35.19181rem;
  max-width: 80%;
`;

const Rectangle = styled.div`
  height: 2px;
  background-color: ${(props) =>
    props.selectedRole ? colors.pink.pink : colors.gray.light};
  opacity: ${(props) => (props.selectedRole ? "100%" : "50%")};
  align-self: stretch;
`;

export default function LoginPage() {
  const { login, loginRecruiter } = useAuth();
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(selectedRole, formData.email, formData.password);
    // try {
    // } catch (error) {
    //   console.log(error);
    // }
    if (selectedRole === "professional") {
      await login(formData);
    }
    if (selectedRole === "recruiter") {
      await loginRecruiter(formData);
    }
  }

  function handleRoleChange(event) {
    setSelectedRole(event.target.value);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  }

  const [selectedRole, setSelectedRole] = useState("professional");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Container>
        <Header />
        <Main>
          <Section>
            <Title>Welcome back</Title>
            <Paragraph>Login to your account as...</Paragraph>
            <Form onSubmit={handleSubmit}>
              <RoleSection>
                <InputContainer>
                  <input
                    id="professional"
                    name="role"
                    value="professional"
                    type="radio"
                    checked={selectedRole === "professional"}
                    onChange={handleRoleChange}
                    hidden
                  />
                  <Label
                    selectedRole={selectedRole === "professional"}
                    htmlFor="professional"
                  >
                    professional
                  </Label>
                  <Rectangle selectedRole={selectedRole === "professional"} />
                </InputContainer>
                <InputContainer>
                  <input
                    id="recruiter"
                    name="role"
                    value="recruiter"
                    type="radio"
                    checked={selectedRole === "recruiter"}
                    onChange={handleRoleChange}
                    hidden
                  />
                  <Label
                    selectedRole={selectedRole === "recruiter"}
                    htmlFor="recruiter"
                  >
                    recruiter
                  </Label>
                  <Rectangle selectedRole={selectedRole === "recruiter"} />
                </InputContainer>
              </RoleSection>
              <InfoSection>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={"some.user@mail.com"}
                  label={"email"}
                />
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={"******"}
                  label={"password"}
                />
              </InfoSection>
              <Button
                style={{ alignSelf: "flex-end" }}
                type={"primary"}
                size={"sm"}
              >
                Login
              </Button>
            </Form>
          </Section>
          <section>
            <Man src={person} alt="icon" />
          </section>
        </Main>
      </Container>
    </>
  );
}
