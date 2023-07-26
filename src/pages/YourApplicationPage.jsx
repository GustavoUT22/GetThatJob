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

import CircularCheckbox from "../components/inputs/circularCheckbox";

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

const OptionContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
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
              <OptionContainer>
                <CircularCheckbox />
                <label htmlFor="radio1">All</label>
                {/* <input type="radio" id="radio1" name="radio" /> */}
              </OptionContainer>
              <OptionContainer>
                <CircularCheckbox />
                <label htmlFor="radio2">Waiting</label>
                {/* <input type="radio" id="radio2" name="radio" /> */}
              </OptionContainer>
              <OptionContainer>
                <CircularCheckbox />
                <label htmlFor="radio3">In progress</label>
                {/* <input type="radio" id="radio3" name="radio" /> */}
              </OptionContainer>
              <OptionContainer>
                <CircularCheckbox />
                <label htmlFor="radio4">Finished</label>
                {/* <input type="radio" id="radio4" name="radio" /> */}
              </OptionContainer>
              <OptionContainer>
                <CircularCheckbox />
                <label htmlFor="radio5">Declined</label>
                {/* <input type="radio" id="radio5" name="radio" /> */}
              </OptionContainer>
            </FlexRowSm>
          </div>
        </FlexColumnXs>
        <ApliFound>{applyData.length} applications found</ApliFound>
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
