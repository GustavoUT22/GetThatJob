import styled from "@emotion/styled";
import { Title } from "./SearchPage";
import CardJob from "../components/CardJob";
import { colors } from "../styles/colors";
import CheckSelect from "../components/inputs/CheckSelect";

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
  return (
    <ContainerFollowing>
      <div style={{ maxWidth: "960px" }}>
        <Title>Following</Title>
        <FollowsCard>
          <h3>You are following 6 jobs</h3>
          <CheckSelect />
          <ContainerFollow>
            {/* <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob /> */}
          </ContainerFollow>
          <h3>You are following 6 companies</h3>
          <ContainerFollow>
            {/* <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob /> */}
          </ContainerFollow>
        </FollowsCard>
      </div>
    </ContainerFollowing>
  );
}

export default FollowingPage;
