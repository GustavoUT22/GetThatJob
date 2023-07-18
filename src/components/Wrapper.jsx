import React from "react";
import styled from "@emotion/styled";
import SideBar from "./SideBar";
import JobDetails from "./jobDetails/JobDetails";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: #f5f5f6;
`;

const Wrapper = () => {
  return (
    <MainWrap>
      <SideBar />
      <JobDetails />
    </MainWrap>
  );
};

export default Wrapper;
