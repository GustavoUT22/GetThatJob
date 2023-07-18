import React from "react";
import styled from "@emotion/styled";
import SideBar from "./SideBar";
import JobDetails from "./JobDetails";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
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
