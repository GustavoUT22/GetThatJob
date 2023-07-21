import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import InputSearch from "../components/inputs/inputSearch";
import Input from "../components/inputs/Input";
import { BiCategory } from "react-icons/bi";
import CardJob from "../components/CardJob";
import Price from "../components/inputs/input-price";
import SelectInput from "../components/inputs/inputSelect";
import { useEffect, useState } from "react";
import { getJobs } from "../services/jobs-pro-services";
import CheckSelect from "../components/inputs/CheckSelect";
import { StyledLabel } from "../components/inputs/Input";

export const ContainerSearch = styled.div`
  display: "flex";
  padding: 32px 120px;
  height: 100vh;
`;

export const Title = styled.div`
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.25px;
  color: ${colors.gray.dark};
  margin-bottom: 16px;
`;

const ContainerJobCards = styled.div`
  padding: 8px;
`;

const CountJobs = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: ${colors.gray.dark};
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 10px;
  gap: 16px 32px;
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
  height: 59vh;
  margin-top: 16px;
`;

function SearchJob() {
  const [jobsData, setJobsData] = useState({
    all: [],
    filtered: [],
  });
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleChange(value) {
    setSelectedOptions(value);
  }

  const options = [
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Legal", label: "Legal" },
    { value: "Education", label: "Education" },
    { value: "Government", label: "Government" },
    { value: "Sales", label: "Sales" },
  ];

  useEffect(() => {
    getJobs().then((data) => {
      setJobsData({
        all: data,
        filtered: data,
      })
    }).catch(console.log);
  }, []);
  
  useEffect(() => {
    if(selectedOptions.length !== 0) {
      const filterJobs = jobsData.all.filter((job) => (
        selectedOptions.some((option) => job.category.includes(option)) 
      ))
      setJobsData({
        ...jobsData,
        filtered: filterJobs,
      })
    } else {
      setJobsData({
        ...jobsData,
        filtered: jobsData.all
      })
    }
  }, [selectedOptions])

  const countJobs = `${jobsData.filtered.length} Jobs for you`;

  return (
    <ContainerSearch>
      <Title>Find a job</Title>
      <InputSearch />
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledLabel>category</StyledLabel>
          <CheckSelect options={options} selectedOptions={selectedOptions} onChange={handleChange}/>
        </div>
        {/* <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <StyledLabel>type</StyledLabel>
          <CheckSelect options={options} />
        </div> */}
        <div>
          <Price />
        </div>
      </div>
      <ContainerJobCards>
        <CountJobs>{countJobs}</CountJobs>
        <ContainerCards>
          {jobsData.filtered.map((job, index) => (
            <CardJob key={index} props={job} />
          ))}
        </ContainerCards>
      </ContainerJobCards>
    </ContainerSearch>
  );
}

export default SearchJob;
