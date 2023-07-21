import styled from "@emotion/styled";
import { ContainerSearch, Title } from "./SearchPage";
import {
  FlexColumnSm,
  FlexColumnXs,
  FlexRowSm,
  FlexBetweenColumn,
  FlexBetweenRow,
} from "../components/utils";
import { colors } from "../styles/colors";
import ApplicationJobCard from "../components/Cards/ApplicationJobCard";
import { useEffect, useState } from "react";
import {
  getApplications,
  deleteApplications,
} from "../services/application-services";
import { useNavigate } from "react-router";
import { useCallback } from "react";

const FilterName = styled.span`
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const ApliFound = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  letter-spacing: 0.15px;
`;

function YourApplicationsPage() {
  const [applyData, setApplyData] = useState([]);
  const navigate = useNavigate();

  useCallback(
    useEffect(() => {
      getApplications().then(setApplyData).catch(console.log);
    }, [])
  );

  async function handleDecline(id) {
    deleteApplications(id);
    await getApplications().then(setApplyData).catch(console.log);
  }

  return (
    <ContainerSearch>
      <FlexColumnSm>
        <FlexColumnXs>
          <Title>Your applications</Title>
          <div>
            <FilterName>Filter your applications</FilterName>
            <FlexRowSm>
              <label htmlFor="radio">option 1</label>
              <input type="radio" id="radio" />
              <label htmlFor="radio">option 2</label>
              <input type="radio" id="radio" />
              <label htmlFor="radio">option 3</label>
              <input type="radio" id="radio" />
              <label htmlFor="radio">option 4</label>
              <input type="radio" id="radio" />
              <label htmlFor="radio">option 5</label>
              <input type="radio" id="radio" />
            </FlexRowSm>
          </div>
        </FlexColumnXs>
        <ApliFound>4 applications found</ApliFound>
        <FlexColumnSm>
          {applyData.map((apply) => (
            <ApplicationJobCard
              key={apply.id}
              props={apply}
              onDelete={() => handleDecline(apply.id)}
            />
          ))}
        </FlexColumnSm>
      </FlexColumnSm>
    </ContainerSearch>
  );
}

export default YourApplicationsPage;
