import styled from "@emotion/styled";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Anonimo from "../assets/user-anonimo.png";
import Gustavo from "../assets/members/gustavo.jpg";
import Amanda from "../assets/members/amanda.png";
import Fernando from "../assets/members/fernando.jpg"
import { colors } from "../styles/colors";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 240px;
`;

const IconsMembers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
`;

const ImgMember = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin-bottom: 16px;
`;

const ContainerMembers = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
`;

const NameMember = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
`;

const LinkIcon = styled.a`
  display: flex;
  padding: 8px;
  text-decoration: none;
  color: ${colors.gray.gray};
`;

const MeetTheTeam = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${colors.pink.pink};
  margin-bottom: 26px;
`;

const ContainerTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const membersData = [
  {
    name: "Gustavo Ugarte",
    photo: Gustavo,
    github: "https://github.com/GustavoUT22",
    linkedin: "https://www.linkedin.com/in/gustavougartetorres/",
  },
  {
    name: "Amanda Trigueros",
    photo: Amanda,
    github: "https://github.com/Amanda-Trigueros",
    linkedin: "https://www.linkedin.com/in/amandatrigueros/",
  },
  {
    name: "Fernando Mondragon",
    photo: Fernando,
    github: "https://github.com/FMondragon7",
    linkedin: "https://www.linkedin.com/in/fernando-mondragon-maytorena/",
  },
  {
    name: "Kevin Quispe",
    photo: Anonimo,
    github: "https://github.com/Kevincarlosqa",
    linkedin: "https://www.linkedin.com/in/kevin-quispe-aquise/",
  },
  {
    name: "Sebastian Maguiña",
    photo: Anonimo,
    github: "https://github.com/Sebas54318",
    linkedin: "https://www.linkedin.com/in/sebastian-magui%C3%B1a/",
  },
];

const InfoMember = styled.div``;
function TeamMembers() {
  return (
    <ContainerTeam>
      <MeetTheTeam>Meet the team</MeetTheTeam>
      <ContainerMembers>
        {membersData.map((member) => (
          <CardWrapper>
            <ImgMember src={member.photo} />
            <NameWrapper>
              <NameMember>{member.name}</NameMember>
            </NameWrapper>
            <IconsMembers>
              <LinkIcon href={member.github} target="_BLANK">
                <AiFillGithub style={{ width: "24px", height: "24px" }} />
              </LinkIcon>
              <LinkIcon href={member.linkedin} target="_BLANK">
                <AiOutlineLinkedin style={{ width: "24px", height: "24px" }} />
              </LinkIcon>
            </IconsMembers>
          </CardWrapper>
        ))}
      </ContainerMembers>
    </ContainerTeam>
  );
}

export default TeamMembers;
