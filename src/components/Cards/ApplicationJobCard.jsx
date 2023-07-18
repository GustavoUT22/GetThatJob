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

function ApplicationJobCard() {
  const [showDetail, setShowDetail] = useState(true);
  function handleShowDetail() {
    if (showDetail) {
      setShowDetail(false);
    }
    if (!showDetail) {
      setShowDetail(true);
    }
  }

  return (
    <ApplicationBox>
      <div>
        <FlexBetweenRow>
          <FlexRowSm style={{ display: "flex", alignContent: "center" }}>
            <div style={{ width: "60px", height: "60px" }}>
              <img src={ImgJob} />
            </div>
            <FlexColumn>
              <JobTitle>The Job title</JobTitle>
              <CompanyName>The Company name SA</CompanyName>
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
              <CategoryJob>Manufactoring</CategoryJob>
              <RiCalendar2Line style={{ width: "15px", height: "15px" }} />
              <JobTimeSalary>Full time</JobTimeSalary>
            </FlexRowXs>
            <FlexRowXs>
              <RiMoneyDollarCircleLine
                style={{ width: "15px", height: "15px" }}
              />
              <CategoryJob>2.0k - 2.5k</CategoryJob>
              <RiTimeLine style={{ width: "15px", height: "15px" }} />
              <JobTimeSalary>Posted 2 days ago</JobTimeSalary>
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
              <MessageSmall>Sent 1 min. ago</MessageSmall>
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
          <StyledLabel>Last updated on 12/12/12</StyledLabel>
          <ExperienceTitle>Professional Experience</ExperienceTitle>
          <br></br>
          <TextInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a,
            tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in,
            ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus
            ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra
            porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan
            feugiat urna, eu hendrerit dui varius sit amet. Mauris eget
            tristique turpis. Curabitur eget hendrerit turpis. <br />
            Etiam rutrum dolor eu posuere vehicula. Pellentesque ut mauris
            neque. Maecenas posuere sit amet erat at placerat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse potenti. Donec
            tempor lobortis nisl. Maecenas sit amet massa in tortor pulvinar
            sollicitudin. Fusce vitae feugiat felis, ut malesuada purus.
            Curabitur felis velit, interdum vitae viverra quis, sagittis ac
            nulla. Quisque tempus pharetra ornare. In sed nulla eget risus
            cursus facilisis vel quis nibh. Praesent euismod lectus a.
          </TextInfo>
          <br />
          <ExperienceTitle>
            Why are you interested in working at The company name SA
          </ExperienceTitle>
          <br />
          <TextInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            egestas ex at libero feugiat volutpat. Praesent fringilla
            scelerisque felis, ac elementum metus fringilla in. Maecenas et nibh
            fringilla, egestas arcu vel, tristique dui. Nulla quis suscipit
            erat, nec pretium arcu. Aenean blandit lacinia mauris, quis bibendum
            ante sagittis cursus. Pellentesque mattis ipsum et lorem euismod
            rutrum. Duis ullamcorper venenatis nisi, nec malesuada tellus
            tincidunt a. Maecenas suscipit odio sed justo accumsan iaculis.
            Quisque vitae erat ac felis tincidunt auctor vitae non est. Praesent
            vehicula feugiat faucibus.
          </TextInfo>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              children={"downland"}
              icon={<RiDownloadLine />}
              type={"secondary"}
              size={"sm"}
            />
            <Button
              children={"decline application"}
              icon={<RiCloseCircleLine />}
              type={"primary"}
              size={"sm"}
            />
          </div>
        </div>
      )}
    </ApplicationBox>
  );
}

export default ApplicationJobCard;
