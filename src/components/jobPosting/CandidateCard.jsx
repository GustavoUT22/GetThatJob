import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  RiLinkedinBoxLine,
  RiMailOpenLine,
  RiMailLine,
  RiPhoneLine,
  RiPauseCircleLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";
import ApplicationStatus from "../ApplicationStatus";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
  margin-top: 8px;
  margin-bottom: 8px;
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
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    color: #8e8e8e;
    display: flex;
    flex-direction: column;
    gap: 4px;
    & div {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
  & > div:nth-of-type(3) {
    display: flex;
    gap: 4px;
  }

  & > div:nth-of-type(3) > div {
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    color: #616161;

    height: 48px;
  }
  & > div:nth-of-type(3) > div:last-child {
    color: #f48fb1;
  }
  & > div:nth-of-type(4) {
    display: flex;
  }
  & > div:nth-of-type(4) > div {
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

// const AplicationContainer = styled.div``;

const Button = styled.div`
  width: auto;

  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid #cf4f8fb1;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: gray;
  background-color: transparent;
`;

const CandidateCard = ({ job, status, setStatus }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  function handleShowDetail() {
    if (showDetail) {
      setShowDetail(false);
    }
    if (!showDetail) {
      setShowDetail(true);
    }
  }

  function handleShow() {
    navigate(`/jobs`);
  }

  return (
    <Container>
      <CardContainer>
        <div>
          <h3>{job.company_name}</h3>
          <div>
            <RiLinkedinBoxLine />
            <span>{job.professional.name}</span>
          </div>
        </div>
        <div>
          <div>
            <RiMailLine />
            <span>{job.professional.email}</span>
          </div>
          <div>
            <RiPhoneLine />
            <span>{job.professional.phone}</span>
          </div>
        </div>
        <div>
          <ApplicationStatus
            props={job}
            status={status}
            setStatus={setStatus}
          />

          <div onClick={handleShowDetail}>
            <RiArrowDownSLine />
          </div>
        </div>
      </CardContainer>
      {showDetail && (
        <JobDetailCard>
          <div>
            <h3>Professional Experience</h3>
            {/* <p>{about}</p> */}
          </div>
          <div>
            <h3>Why are you interested in working at The company name SA</h3>
            {/* <p>{mandatory}</p> */}
          </div>
        </JobDetailCard>
      )}
    </Container>
  );
};

export default CandidateCard;
