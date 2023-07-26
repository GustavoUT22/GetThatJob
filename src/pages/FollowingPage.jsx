import styled from "@emotion/styled";
import { Title } from "./SearchPage";
import { colors } from "../styles/colors";
import { getFollows } from "../services/following-services";
import { useEffect, useState } from "react";
import FollowCards from "../components/CardFollow";

export const ContainerFollowing = styled.div`
  display: "flex";
  padding: 32px 120px;
  height: 100vh;
`;

const ContainerFollow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 10px;
  gap: 16px 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const FollowsCard = styled.div`
  height: 85vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.pink.light};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.pink.pink};
  }

  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;

function FollowingPage() {
  const [followsData, setFollowsData] = useState([]);

  useEffect(() => {
    getFollows().then(setFollowsData).catch(console.log);
  }, []);

  const jobs = followsData.filter((follow) => follow.followable_type == "Job");
  const companies = followsData.filter(
    (follow) => follow.followable_type == "Recruiter"
  );
  console.log(followsData);
  return (
    <ContainerFollowing>
      <div style={{ maxWidth: "960px" }}>
        <Title>Following</Title>
        <FollowsCard>
          <h3>You are following {jobs.length} jobs</h3>
          <ContainerFollow>
            {jobs.map((job) => (
              <FollowCards props={job} />
            ))}
          </ContainerFollow>
          {/* <h3>You are following {companies.length} companies</h3>
          <ContainerFollow>
            {companies.map((company) => (
              <FollowCards props={company} />
            ))}
          </ContainerFollow> */}
        </FollowsCard>
      </div>
    </ContainerFollowing>
  );
}

export default FollowingPage;
