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
import { Filter, priceFilter, searchBarFilter } from "../components/utils";

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
  const [selectedOptions, setSelectedOptions] = useState({
    category: [],
    type: [],
  });
  const [price, setPrice] = useState({
    min: null,
    max: null,
  })
  const [search, setSearch] = useState("")

  function handleChange(name, value) {
    setSelectedOptions({
      ...selectedOptions,
      [name]: value,
    });
  }

  function handlePriceChange() {
    const { name, value } = event.target;
    let min = price.min;
    let max = price.max;

    if (name === "min") {
      min = +value < 0 ? 0 : +value;
      if (max <= min && max !== null) {
        max = min + 1;
      }
    } else if (name === "max") {
      if (max === null && min !== null) {
        max = min + 1;
      } else {
        max = +value < 0 ? 0 : +value;
      }

      if (max <= min) {
        min = (max - 1) < 0 ? 0 : (max - 1);
      }

      if(min === 0 && max === 0) {
        max = 1;
      }
    }

    setPrice({
      min: min,
      max: max,
    });
  }

  function handleSearchChange(event) {
    const { value } = event.target
    setSearch(value.toLowerCase())
  }

  const options = [
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Legal", label: "Legal" },
    { value: "Education", label: "Education" },
    { value: "Goverment", label: "Goverment" },
    { value: "Sales", label: "Sales" },
  ];

  const typeOptions = [
    { value: "Part Time", label: "Part Time" },
    { value: "Full Time", label: "Full Time" },
    { value: "Internship", label: "Internship" },
  ];

  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobsData({
          all: data,
          filtered: data,
        });
      })
      .catch(console.log);
  }, []);


  useEffect(() => {
    const filterJobs = Filter(jobsData.all, selectedOptions.category, selectedOptions.type)
    const priceFilterJobs = priceFilter(filterJobs, price.min, price.max)
    const searchFilter = searchBarFilter(priceFilterJobs, search)
    setJobsData({
      ...jobsData,
      filtered: searchFilter,
    })
  }, [selectedOptions, price, search])

  const countJobs = `${jobsData.filtered.length} Jobs for you`;

  return (
    <ContainerSearch>
      <Title>Find a job</Title>
      <InputSearch onChange={handleSearchChange} value={search}/>
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
          <CheckSelect
            type={"category"}
            options={options}
            selectedOptions={selectedOptions.category}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <StyledLabel>type</StyledLabel>
          <CheckSelect
            type={"type"}
            options={typeOptions}
            selectedOptions={selectedOptions.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <Price price={price} onChange={handlePriceChange}/>
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
