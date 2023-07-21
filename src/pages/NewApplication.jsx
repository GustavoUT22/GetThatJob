import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";
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
import TextArea from "../components/inputs/Input-textarea";
import { apply } from "../services/jobs-pro-services";

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

function NewApplicationPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [jobData, setJobData] = useState({});
  const [applyData, setApplyData] = useState({
    experience: "",
    why_interested: "",
    job_id: +id,
    professional_id: user.id,
  });
  const navigate = useNavigate();

  useEffect(() => {
    showJob(id).then(setJobData).catch(console.log);
  }, []);

  const { experience, why_interested } = applyData;

  function handleChange(event) {
    // const { name, value } = event.target;
    setApplyData({ ...applyData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(applyData);
    apply(applyData).then(console.log).catch(console.log);
  }

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
      <JobFormContainer>
        <form onSubmit={handleSubmit}>
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
            <TextArea
              label={"Professional experience (taken from your profile)"}
              value={applyData.experience ? applyData.experience : ""}
              name={"experience"}
              onChange={handleChange}
              placeholder={"I have experience..."}
            />
          </div>
          <div>
            <TextArea
              label={"Why are you interested in working at The company name SA"}
              name={"why_interested"}
              value={applyData.why_interested ? applyData.why_interested : ""}
              onChange={handleChange}
              placeholder={"I interested..."}
            />
            <p>Between 50 and 1000 characters</p>
          </div>
          <div>
            <button type="submit">Send Application</button>
          </div>
        </form>
      </JobFormContainer>
    </Container>
  );
}

export default NewApplicationPage;

{
  /* <TextArea
label={"Professional Experience"}
value={user.experience ? user.experience : ""}
name="experience"
onChange={handleChange}
/> */
}
