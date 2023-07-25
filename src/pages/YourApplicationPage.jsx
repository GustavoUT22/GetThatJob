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
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  useCallback(
    useEffect(() => {
      getApplications().then(setApplyData).catch(console.log);
    }, [])
  );

  function handleChange(event) {
    setSelectedValue(event.target.value)
  }

  async function handleDecline(id) {
    deleteApplications(id);
    await getApplications().then(setApplyData).catch(console.log);
  }

  console.log(selectedValue)

  return (
    <ContainerSearch>
      <FlexColumnSm>
        <FlexColumnXs>
          <Title>Your applications</Title>
          <div>
            <FilterName>Filter your applications</FilterName>
            <FlexRowSm style={{alignItems: "baseline"}}>
              <label htmlFor="radio1">
                <input type="radio" 
                  id="radio1" 
                  name="filter" 
                  value="all" 
                  checked={selectedValue === "all"}
                  onChange={handleChange}
                  />
                All
              </label>
              <label htmlFor="radio2">
                <input type="radio" 
                  id="radio2" 
                  name="filter" 
                  value="waiting" 
                  checked={selectedValue === "waiting"}
                  onChange={handleChange}
                  />
                Waiting
              </label>
              <label htmlFor="radio3">
                <input type="radio" 
                  id="radio3" 
                  name="filter" 
                  value="inProgress" 
                  checked={selectedValue === "inProgress"}
                  onChange={handleChange}
                  />
                In progress
              </label>
              <label htmlFor="radio4">
                <input type="radio" 
                  id="radio4" 
                  name="filter" 
                  value="finished" 
                  checked={selectedValue === "finished"}
                  onChange={handleChange}
                  />
                Finished
              </label>
              <label htmlFor="radio5">
                <input type="radio" 
                  id="radio5" 
                  name="filter" 
                  value="declined" 
                  checked={selectedValue === "declined"}
                  onChange={handleChange}
                  />
                Declined
              </label>
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
