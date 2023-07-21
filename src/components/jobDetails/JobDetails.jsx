import styled from "@emotion/styled";
import JobForm from "./JobForm";
import Button from "../buttons/Button";
import { LuMousePointer2 } from "react-icons/lu";

import {
  RiArrowLeftSLine,
  RiTimeLine,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

import jobLogo from "../../assets/jobdetail-logo.png";
import followingIcon from "../../assets/FollowButton.png";
import { showJob } from "../../services/jobs-pro-services";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const Container = styled.div`
  display: block;
  width: 960px;
  margin: auto;
  margin-top: 32px;
`;

export const JobHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div:nth-of-type(1) {
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: 1.25px;
    text-transform: uppercase;
    gap: 4px;
  }
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
  }
  & > div:nth-of-type(2) > div:first-child {
    display: flex;
    gap: 16px;
  }
  & > div:nth-of-type(2) > div:first-child > div:first-child {
    display: flex;
    width: 80px;
    height: 80px;
    padding: 2.667px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  }
  & > div:nth-of-type(2) > div:first-child > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & > div:nth-of-type(2) > div:first-child > div:last-child > h3 {
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    background-color: white;
    border: 1px solid #bf5f82;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 8px 32px 16px 32px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
    gap: 4px;
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

const JobDescription = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 54px 0;
  & div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & div > h3 {
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #bf5f82;
  }
  & div > div {
    width: 760px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.5px;
  }
`;

const JobDetails = () => {
  const [jobData, setJobData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("here");
    showJob(id).then(setJobData).catch(console.log);
  }, []);

  const jobCardInfo = [
    {
      title: "Category",
      icon: <RiBuilding3Line />,
      value: `${jobData.category}`,
    },
    { title: "type", icon: <RiCalendar2Line />, value: `${jobData.job_type}` },
    {
      title: "Category",
      icon: <RiMoneyDollarCircleLine />,
      value: `${jobData.salary - 1000}- ${jobData.salary + 1000}`,
    },
  ];

  console.log(jobData);

  return (
    <Container>
      <JobHead>
        <div onClick={() => navigate("/jobs")}>
          <RiArrowLeftSLine style={{ height: "24px", width: "24px" }} />
          <span>BACK</span>
        </div>
        <div>
          <div>
            <div>
              <img src={jobLogo} />
            </div>
            <div>
              <h3>{jobData.company_name}</h3>
              <div>
                <img src={followingIcon} />
              </div>
            </div>
          </div>
          <div>
            <Button
              children={"apply now"}
              icon={<LuMousePointer2 />}
              type={"primary"}
              size={"sm"}
              onClick={() => navigate(`/jobs/${jobData.id}/apply`)}
            />
          </div>
        </div>
        <div>
          <h1>{jobData.title}</h1>
          <div>
            <RiTimeLine style={{ height: "15px", width: "15px" }} />
            <span>{jobData.created_at}</span>
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
      <JobDescription>
        <div>
          <h3>About {jobData.company_name}</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque porta nunc viverra velit tincidunt, non vehicula augue
            vehicula. Donec viverra luctus nisl, sed vehicula ligula. Vivamus
            maximus metus a magna fermentum ullamcorper. Phasellus ultrices
            vestibulum ligula ut pellentesque. Quisque quis congue quam. Nunc
            porttitor risus lorem, in blandit augue iaculis vitae. Cras sit amet
            fringilla neque. Fusce ac elit ut quam ultrices bibendum. Curabitur
            vitae dignissim quam. Suspendisse aliquet massa id orci volutpat
            ullamcorper. Nunc at ante sem. Etiam elementum, mi eget aliquam
            lobortis, elit libero tempus ex, vel pretium nisi risus ac augue.
          </div>
        </div>
        <div>
          <h3>About the job position</h3>
          <div>{jobData.about}</div>
        </div>
        <div>
          <h3>Mandatory Requirements</h3>
          <div>{jobData.mandatory}</div>
        </div>
        <div>
          <h3>Optional Requirements</h3>
          <div>{jobData.optional_req}</div>
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Button
            children={"apply now"}
            icon={<LuMousePointer2 />}
            type={"primary"}
            size={"sm"}
            onClick={() => navigate(`/jobs/${jobData.id}/apply`)}
          />
        </div>
      </JobDescription>
    </Container>
  );
};

export default JobDetails;
