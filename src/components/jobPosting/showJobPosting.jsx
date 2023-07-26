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
  const [status, setStatus] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();
  const [jobsData, setJobsData] = useState([]);

  
   useEffect(() => {
     getJobRecruiter(id).then(setJobsData).catch(console.log);
   }, []);

  // useEffect(() => {
  //   async function getJob() {
  //     try {
  //       const data = await getJobRecruiter(id);
  //       setJobsData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getJob();
  // }, [id]);

  useEffect(() => {
    if (status){
      console.log("any")
    } 
   },[status])

  console.log(jobsData);

  function handleBack() {
    navigate("/jobs");
  }

  return (
    <Container>
      <div onClick={handleBack}>
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
      />
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <p>Filter your Job Postings</p>
        <div>
          <input type="checkbox" id="all" />
          <label htmlFor="all">All</label>
          <input type="checkbox" id="onTrack" />
          <label htmlFor="onTrack">With candidates on track</label>
          <input type="checkbox" id="closed" />
          <label htmlFor="closed">Closed</label>
        </div>
      </div>
      <CandidatesCount> {jobsData.applications?.length ?? 0} candidates found</CandidatesCount>
      {jobsData.length === 0
        ? ""
        : jobsData.applications.map((job, index) => (
            <CandidateCard key={index} job={job} status={status} setStatus={setStatus}/>
          ))}
    </Container>
  );
}
export default ShowJobPosted;
