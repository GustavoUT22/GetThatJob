import styled from "@emotion/styled";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router";
import JobPostCard from "./JobPostCard";
import CandidateCard from "./CandidateCard";
import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobs-pro-services";
import { getJobRecruiter } from "../../services/jobs-pro-services";
import { typography } from "../../styles";

const Container = styled.div`
  display: block;
  width: 960px;
  margin: auto;
  margin-top: 32px;
  gap: 1rem;
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

const CandidatesCount = styled.span`
  ${typography.head.xs};
`;

function ShowJobPosted() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    getJobRecruiter(id).then(setJobsData).catch(console.log);
    // update information of created_at from getJobRecruiter
  }, [status]);

  useEffect(() => {
    if (status) {
      console.log("any");
    }
  }, [status]);

  useEffect(() => {
    if(filter !== "all") {
      const filtered = jobsData.applications.filter((job) => job.status === filter)
      setFilteredJobs(filtered)
    } else {
      setFilteredJobs(jobsData.applications)
    }
  },[filter])
  
  function handleBack() {
    navigate("/jobs");
  }

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }
  
  return (
    <Container>
      <div style={{display: "flex", alignContent: "center", cursor: "pointer"}} onClick={handleBack}>
        <RiArrowLeftSLine style={{ height: "24px", width: "24px" }} />
        <span>BACK</span>
      </div>
      <h1>Show Job posting</h1>
      <JobPostCard
        id={jobsData.id}
        title={jobsData.title}
        category={jobsData.category}
        job_type={jobsData.job_type}
        salary={jobsData.salary}
        about={jobsData.about}
        mandatory={jobsData.mandatory}
        optional_req={jobsData.optional_req}
        applications={jobsData.applications}
        created_at={jobsData.created_at}
        applications_count={jobsData.applications_count}
      />
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <p>Filter your Job Postings</p>
        <div>
          <input type="radio" id="all" value={"all"} name="filter" onChange={handleFilterChange} checked={filter === "all"} />
          <label htmlFor="all">All</label>
          <input type="radio" id="waiting" value={"Waiting for review"} name="filter" onChange={handleFilterChange} checked={filter === "Waiting for review"} />
          <label htmlFor="waiting">Waiting</label>
          <input type="radio" id="inProgress" value={"Review in progress"} name="filter" onChange={handleFilterChange} checked={filter === "Review in progress"} />
          <label htmlFor="inProgress">In progress</label>
          <input type="radio" id="finished" value={"Review finished"} name="filter" onChange={handleFilterChange} checked={filter === "Review finished"} />
          <label htmlFor="finished">Finished</label>
        </div>
      </div>
      <CandidatesCount>
        {" "}
        {filteredJobs.length ?? 0} candidates found
      </CandidatesCount>
      {filteredJobs.length === 0
        ? ""
        : filteredJobs.map((job, index) => (
            <CandidateCard
              key={index}
              job={job}
              status={status}
              setStatus={setStatus}
            />
          ))}
    </Container>
  );
}
export default ShowJobPosted;
