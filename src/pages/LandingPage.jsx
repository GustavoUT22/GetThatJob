// import React from "react";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import Button from "../components/buttons/Button";
import TeamMembers from "../components/Team-members";
import Header from "../components/Header";
import Footer from "../components/Footer";
import P1 from "../assets/images/people/scratching-head.png";
import P2 from "../assets/images/people/confident.png";
import P3 from "../assets/images/people/holding-tablet.png";
import P4 from "../assets/images/people/hands-on-hips.png";
import P5 from "../assets/images/people/yellow-bag.png";
import P6 from "../assets/images/people/pink-suit.png";
import P7 from "../assets/images/people/calling.png";
import P8 from "../assets/images/people/glasses.png";
import Magnascope from "../assets/images/Magnascope.png";
import File from "../assets/images/File.png";

const FirstWrapper = styled.div`
  display: flex;
  height: 52rem;
  padding: 2rem 11.625rem 4rem 11.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  background-color: ${colors.gray.bg_light};
`;

const SecondWrapper = styled.div`
  display: flex;
`;

const FindContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 29.5rem;
  padding: 4rem 7.5rem 4rem 7.5rem;

  background-color: ${colors.pink.dark};
`;

const FindTitle = styled.h1`
  ${typography.head.lg};
  color: ${colors.white};
  padding-bottom: 1.5rem;
`;

const FindContent = styled.p`
  ${typography.head.md};
  font-size: 1.5rem;
  width: 100%;
  color: ${colors.white};
  width: 40rem;
`;

const MagnascopeContainer = styled.div`
  position: relative;
  display: flex;
  width: 35rem;
  height: 29.5rem;
  padding: 7.1875rem 7.0625rem 7.1875rem 7rem;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const MagnascopeImg = styled.img`
  width: 16.0625rem;
  height: 16.125rem;
  object-fit: contain;
  position: absolute;
  left: 9%;
  top: 28%;
`;
const FileImg = styled.img`
  width: 8.0625rem;
  height: 8.75rem;
  object-fit: contain;
  position: relative;
  left: 82px;
  top: -42px;
`;

const Title = styled.h1`
  ${typography.head.xl};
  width: 31.5rem;
`;

const Intro = styled.p`
  ${typography.head.sm}
  width: 45rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const PeopleImg = styled.img`
  object-fit: contain;
`;

const PeopleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.31rem;
  margin: auto;
`;

const LandingPage = () => {
  return (
    <>
      <Header/>
      <FirstWrapper>
        <Title>
          The place where you get{" "}
          <span style={{ color: colors.pink.pink }}>that</span> job
        </Title>
        <Intro>
          With our Machine Learning algorithm you will get that job in no time.
          We promise you! Just give us the money and we will take care of it.
        </Intro>
        <Button type={"primary"} size={"lg"}>
          Create an account now
        </Button>
        <PeopleContainer>
          <PeopleImg src={P1} />
          <PeopleImg src={P2} />
          <PeopleImg src={P3} />
          <PeopleImg src={P4} />
          <PeopleImg src={P5} />
          <PeopleImg src={P6} />
          <PeopleImg src={P7} />
          <PeopleImg src={P8} />
        </PeopleContainer>
      </FirstWrapper>
      <SecondWrapper>
        <FindContainer>
          <FindTitle>Find your next job</FindTitle>
          <FindContent>
            Our Machine learning algorithm is so good that it’s even illegal in
            some countries. Join us to use our barely legal algorithm that is
            actually a group of interns that work on our basement.
            <br />
            <br />
            We have a job for you, no matter your background or previous
            experience. Is sending random memes through chat your only skill?
            That’s ok, we got you, our Rock Star Meme Curator role is here for
            you.
          </FindContent>
        </FindContainer>
        <MagnascopeContainer>
          <FileImg src={File} />
          <MagnascopeImg src={Magnascope} />
        </MagnascopeContainer>
      </SecondWrapper>
      <div>
        <TeamMembers />
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
