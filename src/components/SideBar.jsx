import React from "react";
import {
  RiSearchLine,
  RiArticleLine,
  RiUserLine,
  RiLogoutCircleLine,
  RiGithubFill,
  RiReactjsLine,
} from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import styled from "@emotion/styled";
import logo from "./../assets/logo.png";
import { useAuth } from "../context/auth-context";

const integrants = [
  { name: "Amanda Trigueros" },
  { name: "Gustavo Ugarte" },
  { name: "Fernando Mondragón" },
  { name: "Sebastian Maguiña" },
  { name: "Kevin Quispe" },
];

const Image = styled.img`
  height: 35px;
  width: 136px;
  margin: 32px 0;
  padding-left: 1rem;
`;

const Wrapper = styled.div`
  width: 240px;
  display: block;
  background-color: #e1e2e1;
  min-height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
`;

const NavContainer = styled.div`
  width: 100%;
  & > div {
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & > div > :nth-child(1) {
    width: 24px;
    height: 24px;
  }
  & > div > :nth-child(2) {
    font-size: 16px;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.5px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  margin: 1rem;
  margin-bottom: 32px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.4px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  & > div > div {
    display: flex;
    flex-direction: colum;
    align-items: center;
    gap: 4px;
  }
`;

const SideBar = () => {
  const { logout } = useAuth();
  const nav = [
    {
      icon: <RiSearchLine />,
      name: "Find that job",
    },
    {
      icon: <RiArticleLine />,
      name: "Your applications",
    },
    {
      icon: <BiTargetLock />,
      name: "Following",
    },
    {
      icon: <RiUserLine />,
      name: "Profile",
    },
    {
      icon: <RiLogoutCircleLine />,
      name: "Log out",
      onClick: handleLogout,
    },
  ];
  async function handleLogout() {
    console.log("logout");
    await logout();
  }
  return (
    <div>
      <Wrapper>
        <Image src={logo} />
        {/* Navbar */}
        {nav.map((navLink, index) => (
          <NavContainer key={index}>
            <div onClick={navLink.onClick}>
              {navLink.icon}
              <span>{navLink.name}</span>
            </div>
          </NavContainer>
        ))}
        <InfoContainer>
          <p>&copy; 2023 - Get That Job</p>
          <p>
            Codeable - Cohort 10
            <br />
            Final Project
          </p>
          {/* Integrantes */}
          <div>
            <p>Build with 💗 by:</p>
            {integrants.map((integrant, index) => (
              <div key={index}>
                <RiGithubFill />
                <span>{integrant.name}</span>
              </div>
            ))}
          </div>
          <div>
            <p>Source code:</p>
            <div>
              <DiRuby />
              <span>Ruby on Rails REST API</span>
            </div>
            <div>
              <RiReactjsLine />
              <span>React Responsive SPA</span>
            </div>
          </div>
        </InfoContainer>
      </Wrapper>
    </div>
  );
};

export default SideBar;
