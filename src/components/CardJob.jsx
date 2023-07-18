import styled from "@emotion/styled";
import JobImg from "../assets/job-card.png";
import {
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
  RiFocus3Line,
} from "react-icons/ri";
import { colors } from "../styles/colors";

const CardJobWrapper = styled.div`
  display: flex;
  width: 290px;
  height: 170px;
  padding: 16px;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  justify-content: space-between;
`;

const CompanyData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const LogoWrapper = styled.div`
  width: 74.667px;
  height: 74.667px;
`;
// const Category

const JobTitle = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: ${colors.gray.dark};
`;

const CompanyName = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.1px;
  color: ${colors.gray.gray};
`;

const CategoryJob = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 140% */
  letter-spacing: 0.4px;
  color: ${colors.gray.light};
  font-family: Inter;
`;

const JobTimeSalary = styled.div`
  display: flex;
  align-items: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.4px;
  gap: 4px;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: ${colors.gray.light};
`;

const SeeMore = styled.div`
  display: flex;
  padding: 8px 16px;
  height: 40px;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${colors.pink.pink};
  :hover {
    background-color: ${colors.gray.bg_light};
  }
`;

const FollowButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FollowButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function CardJob() {
  return (
    <CardJobWrapper>
      <CompanyInfo>
        <LogoWrapper>
          <img src={JobImg} />
        </LogoWrapper>
        <CompanyData>
          <CategoryJob>
            <RiBuilding3Line style={{ width: "15px", height: "15px" }} />
            Manufactoring
          </CategoryJob>
          <JobTitle>The job title</JobTitle>
          <CompanyName>The company name</CompanyName>
          <BenefitsWrapper>
            <JobTimeSalary>
              <RiCalendar2Line style={{ width: "15px", height: "15px" }} />
              Full time
            </JobTimeSalary>
            <JobTimeSalary>
              <RiMoneyDollarCircleLine
                style={{ width: "15px", height: "15px" }}
              />
              2.0k - 2.5k
            </JobTimeSalary>
          </BenefitsWrapper>
        </CompanyData>
      </CompanyInfo>
      <ButtonsContainer>
        <FollowButtonWrapper>
          <RiFocus3Line style={{ width: "24px", height: "24px" }} />
          follow
        </FollowButtonWrapper>
        <SeeMore>see more</SeeMore>
      </ButtonsContainer>
    </CardJobWrapper>
  );
}

export default CardJob;
