import styled from "@emotion/styled";
import JobPostCard from "./JobPostCard";
import { useState, useEffect } from "react";
import { getJobs } from "../../services/jobs-pro-services";
import { deleteJob } from "../../services/jobs-pro-services";
import CircularCheckbox from "../inputs/circularCheckbox";
import { FlexRowSm } from "../utils";

const Container = styled.div`
  display: block;
  width: 960px;
  margin: auto;
  margin-top: 32px;
  & h1 {
    font-family: Montserrat;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.25px;
    color: #373737;
    margin-bottom: 16px;
  }
`;

const JobPostContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div > p {
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  & > div:first-child {
  }
  & > div:first-child > div {
    display: flex;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
  }
  & > div:last-child {
  }
  & > div:last-child > h3 {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.15px;
    color: #373737;
    margin-bottom: 8px;
  }
  & > div:last-child > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const OptionContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const JobPostings = () => {
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getJobs().then(setJobsData).catch(console.log);
  }, []);

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  async function handleDelete(id) {
    try {
      const response = await deleteJob(id);
      // If the deletion was successful, update the state to remove the deleted job
      console.log(response.message);
      setJobsData((prevJobsData) =>
        prevJobsData.filter((job) => job.id !== id)
      );
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    if (filter !== "all") {
      switch (filter) {
        case "onTrack":
          const filtered1 = jobsData.filter((job) =>
            job.applications.some(
              (application) => application.status !== "Review finished"
            )
          );
          // this filter is test only
          setFilteredJobs(filtered1);
          break;
        case "closed":
          const filtered2 = jobsData.filter((job) => job.category === "Legal");
          // this filter is test only
          setFilteredJobs(filtered2);
          break;
        default:
          break;
      }
    } else {
      setFilteredJobs(jobsData);
    }
  }, [filter, jobsData]);

  console.log(jobsData);
  // I need jobsData.status and close button change status for job posted

  return (
    <Container>
      <h1>Job Postings</h1>
      <JobPostContainer>
        <div>
          <p>Filter your Job Postings</p>
          <div>
            <FlexRowSm>
              <OptionContainer>
                {/* <CircularCheckbox /> */}
                <input
                  type="radio"
                  id="all"
                  name="filter"
                  value={"all"}
                  onChange={handleFilterChange}
                  checked={filter === "all"}
                />
                <label htmlFor="all">All</label>
              </OptionContainer>
              <OptionContainer>
                {/* <CircularCheckbox /> */}
                <input
                  type="radio"
                  id="onTrack"
                  name="filter"
                  value={"onTrack"}
                  onChange={handleFilterChange}
                  checked={filter === "onTrack"}
                />
                <label htmlFor="onTrack">With candidates on track</label>
              </OptionContainer>
              {/* <OptionContainer>
          
                <input type="radio" id="closed" name="filter" value={"closed"} onChange={handleFilterChange} checked={filter === "closed"}/>
                <label htmlFor="closed">Closed</label>
              </OptionContainer> */}
            </FlexRowSm>
          </div>
        </div>
        <div>
          <h3>{filteredJobs.length} jobs postings found</h3>
          <div>
            {filteredJobs.map((job, index) => (
              <JobPostCard
                handleDelete={handleDelete}
                jobsData={jobsData}
                setJobsData={setJobsData}
                id={job.id}
                title={job.title}
                category={job.category}
                job_type={job.job_type}
                salary={job.salary}
                about={job.about}
                mandatory={job.mandatory}
                optional_req={job.optional_req}
                key={index}
                applications={job.applications}
                created_at={job.created_at}
                applications_count={job.applications_count}
              />
            ))}
          </div>
        </div>
      </JobPostContainer>
    </Container>
  );
};

export default JobPostings;
