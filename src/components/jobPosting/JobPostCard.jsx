import React, { useState } from "react";
import styled from "@emotion/styled";

import PropTypes from "prop-types";
import Button from "../buttons/Button";

import {
  RiAccountCircleLine,
  RiMailOpenLine,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
  RiSearchLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiDownloadLine,
  RiCloseCircleLine,
} from "react-icons/ri";
import { useNavigate } from "react-router";
import { getFormattedDate } from "../utils";
import { deleteJob, getJobs } from "../../services/jobs-pro-services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e1e2e1;
  background: white;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:nth-of-type(1) > h3 {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.15px;
  }
  & > div:nth-of-type(1) > div {
    display: flex;
    color: #8e8e8e;
    gap: 8px;
  }
  & > div:nth-of-type(1) > div > div {
    display: flex;
    align-items: center;
    gap: 4px;
    & > span {
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
      letter-spacing: 0.4px;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    gap: 4px;
  }

  & > div:nth-of-type(2) > div {
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    color: #616161;
    width: 80px;
    height: 48px;
  }
  & > div:nth-of-type(2) > div:last-child {
    color: #f48fb1;
  }
  & > div:nth-of-type(3) {
    display: flex;
  }
  & > div:nth-of-type(3) > div:first-child {
    display: flex;
    gap: 16px;
    align-items: center;

    & > div:first-child {
      cursor: pointer;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
      letter-spacing: 1.25px;
      text-transform: uppercase;
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
  & > div:nth-of-type(3) > div {
    padding-right: 16px;
  }
`;

const JobDetailCard = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div > h3 {
    color: #bf5f82;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.15px;
    margin-bottom: 8px;
  }
  & > div > p {
    color: #373737;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
    width: 760px;
  }
`;



function JobPostCard({
  handleDelete,
  jobsData,
  setJobsData,
  id,
  title,
  category,
  job_type,
  salary,
  about,
  mandatory,
  optional_req,
  created_at,
  applications,
  applications_count,
}) {
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const jobPostInfo = [
    { title: "Category", icon: <RiBuilding3Line />, value: category },
    { title: "Category", icon: <RiCalendar2Line />, value: job_type },
    {
      title: "Category",
      icon: <RiMoneyDollarCircleLine />,
      value: salary,
    },
  ];

  function handleShowDetail() {
    setShowDetail(!showDetail)
  }

  function handleShow() {
    navigate(`/jobs/${id}`);
  }

  
  

  console.log(id);
  
  const formattedDate = created_at ? getFormattedDate(created_at) : "";
  const { length } = applications
    ? applications.filter(
        (application) => application.status !== "Review finished"
      )
    : "";
  console.log(id);
  return (
    <Container>
      <CardContainer>
        <div>
          <h3>{title}</h3>
          <div>
            {jobPostInfo.map((jobPost, index) => (
              <div key={index}>
                {jobPost.icon}
                <span>{jobPost.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <RiMailOpenLine />
            <p>Open on</p>
            <p>{formattedDate}</p>
          </div>
          <div>
            <div>
              <RiAccountCircleLine />
              <span>{applications_count}</span>
            </div>
            <p>Total</p>
            <p>Candidates</p>
          </div>
          <div>
            <div>
              <RiAccountCircleLine />
              <span>{length}</span>
            </div>
            <p>Candidates</p>
            <p>on Track</p>
          </div>
        </div>
        <div>
          <div>
            <div onClick={handleShow}>
              <RiSearchLine style={{ width: "24px", height: "24px" }} />
              <span>Show</span>
            </div>
            {/* <button>Close</button> */}
            <Button
              children={"close"}
              icon={
                <RiCloseCircleLine style={{ width: "24px", height: "24px" }} />
              }
              type={"primary"}
              size={"sm"}
              onClick={() => handleDelete(id)}
            />
          </div>
          <div onClick={handleShowDetail}>
            <RiArrowDownSLine />
          </div>
        </div>
      </CardContainer>
      {showDetail && (
        <JobDetailCard>
          <div>
            <h3>About the job position</h3>
            <p>{about}</p>
          </div>
          <div>
            <h3>Mandatory Requirements</h3>
            <p>{mandatory}</p>
          </div>
          <div>
            <h3>Optional Requirements</h3>
            <p>{optional_req}</p>
          </div>
        </JobDetailCard>
      )}
    </Container>
  );
}

JobPostCard.propTypes = {
  job: PropTypes.object, // Cambia "object" al tipo correcto esperado para la prop job
};

export default JobPostCard;
