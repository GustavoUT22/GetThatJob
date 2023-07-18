import styled from "@emotion/styled";
import { BiSolidChevronLeft } from "react-icons/bi";
import { ContainerFollowing } from "../pages/FollowingPage";
import { colors } from "../styles/colors";
import CompanyImg from "../assets/job-card.png";
import { RiFocus3Line } from "react-icons/ri";
import CardJob from "./CardJob";

const BackButton = styled.div`
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  width: 77px;
  :hover {
    background-color: ${colors.pink.light};
    opacity: 0.3;
  }
  cursor: pointer;
`;

const FollowSpan = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: ${colors.gray.gray};
`;

const CompanyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`;

const ImgCompany = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  padding: 2.667px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
`;

const CompanyInfobox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContainerIconFocus = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background-color: ${colors.pink.pink};
`;

const WrapperFollowing = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const CompanyNameFollow = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${colors.gray.dark};
`;

const OpeningsJob = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const JobsOpeningsTitle = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: ${colors.gray.dark};
  margin-bottom: 10px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const JobsPending = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 68vh;
  overflow-y: auto;
  gap: 32px 16px;
  padding: 16px 32px;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.pink.light};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.pink.pink};
  }

  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;

function CompanyFollowed() {
  return (
    <ContainerFollowing>
      <FlexColumn>
        <BackButton onClick={() => console.log("here")}>
          <BiSolidChevronLeft />
          <span>Back</span>
        </BackButton>
        <CompanyBox>
          <ImgCompany src={CompanyImg} />
          <CompanyInfobox>
            <CompanyNameFollow>The company name SA</CompanyNameFollow>
            <WrapperFollowing>
              <ContainerIconFocus>
                <RiFocus3Line
                  style={{ width: "24px", height: "24px", color: "white" }}
                />
              </ContainerIconFocus>
              <FollowSpan>Following</FollowSpan>
            </WrapperFollowing>
          </CompanyInfobox>
        </CompanyBox>
        <OpeningsJob>
          <JobsOpeningsTitle>2 job openings</JobsOpeningsTitle>
          <JobsPending>
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
          </JobsPending>
        </OpeningsJob>
      </FlexColumn>
    </ContainerFollowing>
  );
}

export default CompanyFollowed;
