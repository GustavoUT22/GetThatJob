import React from "react";
import styled from "@emotion/styled";
import SideBar from "./SideBar";
import ProfessionalProfile from "../pages/ProfessionalProfilePage";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import SearchJob from "../pages/SearchPage";
import JobDetails from "./jobDetails/JobDetails";
import YourApplicationsPage from "../pages/YourApplicationPage";
import FollowingPage from "../pages/FollowingPage";
import NewApplicationPage from "../pages/NewApplication";
import CompanyFollowed from "./CompanyFollowed";

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
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/jobs" />} />
          <Route path="jobs" element={<SearchJob />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="applications" element={<YourApplicationsPage />} />
          <Route path="jobs/:id/apply" element={<NewApplicationPage />} />
          <Route path="following" element={<FollowingPage />} />
          <Route path="following/:id" element={<CompanyFollowed />} />
          <Route path="profile" element={<ProfessionalProfile />} />
          <Route path="*" element={<Navigate to="/jobs" replace={true} />} />
        </Route>
      </Routes>
    </MainWrap>
  );
};

export default Wrapper;
