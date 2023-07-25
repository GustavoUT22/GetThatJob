import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import ImgJob from "../../assets/job-card.png";
import { StyledLabel } from "../inputs/Input";
import { JobTitle, CompanyName, CategoryJob, JobTimeSalary } from "../CardJob";
import {
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
  RiFocus3Line,
  RiTimeLine,
  RiMailLine,
  RiPauseCircleLine,
  RiArrowDownSLine,
  RiDownloadLine,
  RiCloseCircleLine,
} from "react-icons/ri";
import {
  FlexBetweenColumn,
  FlexBetweenRow,
  FlexColumnSm,
  FlexRowSm,
  FlexColumn,
  FlexColumnXs,
  FlexRow,
  FlexRowXs,
  getSentTime,
  getFormattedDate,
  getFixedSalary,
} from "../utils";
import { useState } from "react";
import Button from "../buttons/Button";

const ApplicationBox = styled.div`
  display: flex;
  width: 944px;
  padding: 16px;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${colors.gray.bg_dark};
  background: ${colors.white};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
`;

const MessageSmall = styled.span`
  text-align: center;
  color: ${colors.gray.gray};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.4px;
  align-self: stretch;
`;

const ButtonDownUp = styled.button`
  background: none;
  border: none;
  display: flex;
  align-self: flex-end;
  cursor: pointer;
`;

const ExperienceTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.15px;
  color: ${colors.pink.dark};
`;

const TextInfo = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
`;

function ApplicationJobCard({ props, onDelete }) {
  const [showDetail, setShowDetail] = useState(false);
  function handleShowDetail() {
    if (showDetail) {
      setShowDetail(false);
    }
    if (!showDetail) {
      setShowDetail(true);
    }
  }

  function handleDeclineClick() {
    onDelete();
  }

  const salaryRange = {
    min: getFixedSalary(props.job.salary, "min"),
    max: getFixedSalary(props.job.salary, "max"),
  }

  const formattedDate = getFormattedDate(props.job.created_at)
  
  const sentAgoMsg = getSentTime(props.created_at);

  const lastUpdDate = getFormattedDate(props.updated_at)

  console.log(props)
  
  return (
    <ApplicationBox>
      <div>
        <FlexBetweenRow>
          <FlexRowSm style={{ display: "flex", alignContent: "center" }}>
            <div style={{ width: "60px", height: "60px" }}>
              <img src={props.company_logo} />
            </div>
            <FlexColumn>
              <JobTitle>{props.job.title}</JobTitle>
              <CompanyName>{props.company_name}</CompanyName>
            </FlexColumn>
          </FlexRowSm>
          <FlexColumnXs
            style={{
              color: `${colors.gray.light}`,
              display: "flex",
              alignContent: "center",
            }}
          >
            <FlexRowXs>
              <RiBuilding3Line style={{ width: "15px", height: "15px" }} />
              <CategoryJob>{props.job.category}</CategoryJob>
              <RiCalendar2Line style={{ width: "15px", height: "15px" }} />
              <JobTimeSalary>{props.job.job_type}</JobTimeSalary>
            </FlexRowXs>
            <FlexRowXs>
              <RiMoneyDollarCircleLine
                style={{ width: "15px", height: "15px" }}
              />
              <CategoryJob>{salaryRange.min} - {salaryRange.max}</CategoryJob>
              <RiTimeLine style={{ width: "15px", height: "15px" }} />
              <JobTimeSalary>{`Posted ${formattedDate}`}</JobTimeSalary>
            </FlexRowXs>
          </FlexColumnXs>
          <FlexRow style={{ display: "flex", alignContent: "center" }}>
            <FlexColumn
              style={{
                width: "80px",
                height: "47px",
              }}
            >
              <RiMailLine
                style={{ width: "15px", height: "15px", alignSelf: "center" }}
              />
              <MessageSmall>{sentAgoMsg}</MessageSmall>
            </FlexColumn>
            <FlexColumn
              style={{ width: "80px", height: "47px", color: "pink" }}
            >
              <RiPauseCircleLine
                style={{ width: "15px", height: "15px", alignSelf: "center" }}
              />
              <MessageSmall style={{ color: "pink" }}>
                Waiting for review
              </MessageSmall>
            </FlexColumn>
            <ButtonDownUp onClick={handleShowDetail}>
              <RiArrowDownSLine
                style={{ width: "24px", height: "24px", color: "gray" }}
              />
            </ButtonDownUp>
          </FlexRow>
        </FlexBetweenRow>
      </div>
      {showDetail && (
        <div>
          <StyledLabel>{`Last updated on ${lastUpdDate}`}</StyledLabel>
          <ExperienceTitle>Professional Experience</ExperienceTitle>
          <br></br>
          <TextInfo>{props.experience}</TextInfo>
          <br />
          <ExperienceTitle>
            {`Why are you interested in working at ${props.company_name}`}
          </ExperienceTitle>
          <br />
          <TextInfo>{props.why_interested}</TextInfo>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              children={"download"}
              icon={<RiDownloadLine />}
              type={"secondary"}
              size={"sm"}
            />
            <Button
              children={"decline application"}
              icon={<RiCloseCircleLine />}
              type={"primary"}
              size={"sm"}
              onClick={handleDeclineClick}
            />
          </div>
        </div>
      )}
    </ApplicationBox>
  );
}

export default ApplicationJobCard;
