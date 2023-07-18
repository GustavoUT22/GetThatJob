import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import InputSearch from "../components/inputs/inputSearch";
import Input from "../components/inputs/Input";
import { BiCategory } from "react-icons/bi";
import CardJob from "../components/CardJob";
import Price from "../components/inputs/input-price";
import SelectInput from "../components/inputs/inputSelect";
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
  return (
    <ContainerSearch>
      <Title>Find a job</Title>
      <InputSearch />
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "flex-start",
        }}
      >
        <SelectInput label={"category"} defaultValue="Select a category" />
        <SelectInput label={"type"} defaultValue="Select a type" />
        <Price />
      </div>
      <ContainerJobCards>
        <CountJobs>12 jobs for you</CountJobs>
        <ContainerCards>
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
          <CardJob />
          <CardJob />
          <CardJob />
          <CardJob />
        </ContainerCards>
      </ContainerJobCards>
    </ContainerSearch>
  );
}

export default SearchJob;
