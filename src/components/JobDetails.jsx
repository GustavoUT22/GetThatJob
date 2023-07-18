import styled from "@emotion/styled";
import React from "react";
import SideBar from "./SideBar";
import {
  RiArrowLeftSLine,
  RiTimeLine,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

const jobCardInfo = [
  { title: "Category", icon: <RiBuilding3Line />, value: "Manufacturing" },
  { title: "Category", icon: <RiCalendar2Line />, value: "Full Time" },
  {
    title: "Category",
    icon: <RiMoneyDollarCircleLine />,
    value: "2,000 - 2,500",
  },
];

const Container = styled.div`
  display: block;
  width: 960px;
  margin: auto;
  margin-top: 32px;
`;

const JobHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: 1.25px;
    text-transform: uppercase;
    gap: 4px;
  }
  & > div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & > div:nth-of-type(3) > :nth-child(1) {
    text-align: center;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & > div:nth-of-type(3) > :nth-child(2) {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  & > div:nth-of-type(4) {
    display: flex;
    gap: 32px;
    margin: auto;
  }
  & > div:nth-of-type(4) > div {
    border: 1px solid #bf5f82;
    border-radius: 8px;
    display: inline-block;
    padding: 8px 32px 16px 32px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  }
  & > div:nth-of-type(4) > div > p {
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.15px;
  }
  & > div:nth-of-type(4) > div > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & > div:nth-of-type(4) > div > div > :first-child {
    width: 29px;
    height: 29px;
  }
  & > div:nth-of-type(4) > div > div > :last-child {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const JobDetails = () => {
  return (
    <Container>
      <JobHead>
        <div>
          <RiArrowLeftSLine style={{ height: "24px", width: "24px" }} />
          <span>BACK</span>
        </div>
        <div>
          <div></div>
          <div>
            <button>Apply now</button>
          </div>
        </div>
        <div>
          <h1>The job title</h1>
          <div>
            <RiTimeLine style={{ height: "15px", width: "15px" }} />
            <span>Posted 2 days ago</span>
          </div>
        </div>
        <div>
          {jobCardInfo.map((jobInfo, index) => (
            <div key={index}>
              <p>{jobInfo.title}</p>
              <div>
                {jobInfo.icon}
                <span>{jobInfo.value}</span>
              </div>
            </div>
          ))}
        </div>
      </JobHead>
    </Container>
  );
};

export default JobDetails;
