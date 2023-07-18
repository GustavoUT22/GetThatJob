import React from "react";
import styled from "@emotion/styled";
import SideBar from "./SideBar";
import JobDetails from "./JobDetails";
import SearchJob from "../pages/SearchPage";
import ProfessionalProfile from "../pages/ProfessionalProfilePage";
import { colors } from "../styles/colors";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: ${colors.gray.bg_light};
`;

const Wrapper = () => {
  return (
    <MainWrap>

      <SideBar />
      <SearchJob />

    </MainWrap>
  );
};

export default Wrapper;
