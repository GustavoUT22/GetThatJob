import React from "react";
import styled from "@emotion/styled";

const JobFormContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f6;
  gap: 16px;
  margin: 54px 0;
  & > div:nth-of-type(1) {
    color: #bf5f82;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & > div:nth-of-type(2) > p,
  & > div:nth-of-type(4) > p,
  & > div:nth-of-type(5) > p {
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    // margin-bottom: 4px;
  }
  & > div:nth-of-type(4) > input,
  & > div:nth-of-type(5) > input {
    width: 760px;
    border-radius: 8px;
    border: 1px solid #f48fb1;
    background-color: white;
  }
  & > div:nth-of-type(5) > p:last-child {
    color: #8e8e8e;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    text-transform: none;
  }
`;
const JobForm = () => {
  return (
    <JobFormContainer>
      <div>Complete your application</div>
      <div>
        <p>Send your cv updated</p>

        <div>
          <input type="checkbox" id="current_cv" />
          <label htmlFor="current_cv">Use current CV</label>
          <input type="checkbox" id="new_cv" />
          <label htmlFor="new_cv">Upload new CV</label>
        </div>
      </div>
      <div>
        <div>
          <button>Choose a file</button>
          <span>No file chosen</span>
        </div>
        <p>Only PDF. Max size 5MB</p>
      </div>
      <div>
        <p>Professional experience (taken from your profile)</p>
        <input type="textarea" />
      </div>
      <div>
        <p>Why are you interested in working at The company name SA</p>{" "}
        <input type="textarea" />
        <p>Between 50 and 1000 characters</p>
      </div>
      <div>
        <button>Send Application</button>
      </div>
    </JobFormContainer>
  );
};

export default JobForm;
