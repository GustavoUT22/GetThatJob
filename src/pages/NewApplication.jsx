import styled from "@emotion/styled";
import { Container, JobHead } from "../components/jobDetails/JobDetails";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { showJob } from "../services/jobs-pro-services";
import { LuMousePointer2 } from "react-icons/lu";
import {
  RiArrowLeftSLine,
  RiTimeLine,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import jobLogo from "../assets/jobdetail-logo.png";
import followingIcon from "../assets/FollowButton.png";
import Button from "../components/buttons/Button";
import JobForm from "../components/jobDetails/JobForm";
import TextArea from "../components/inputs/Input-textarea";

function NewApplicationPage() {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    showJob(id).then(setJobData).catch(console.log);
  });

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
  return (
    <Container>
      <JobHead>
        <div onClick={() => navigate(`/jobs/${jobData.id}`)}>
          <RiArrowLeftSLine style={{ height: "24px", width: "24px" }} />
          <span>BACK</span>
        </div>
        <div>
          <div>
            <div>
              <img src={jobLogo} />
            </div>
            <div>
              {/* <h3>{jobData.company_name}</h3> */}
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
      <JobForm />
    </Container>
  );
}

export default NewApplicationPage;
