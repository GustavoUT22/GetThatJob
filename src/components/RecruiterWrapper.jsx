import styled from "@emotion/styled";
import NewJob from "../pages/NewJobPage";
import JobPostings from "./jobPosting/JobPostings";
import SideBarRecruiter from "./SidebarRecruiter";
import RecruiterProfile from "../pages/RecruiterProfilePage";
import ShowJobPosted from "./jobPosting/showJobPosting";
import ApplicationStatus from "./ApplicationStatus";

import { Routes, Route, Router, Navigate } from "react-router-dom";

import { colors } from "../styles/colors";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: ${colors.gray.bg_light};
`;

const RecruiterWrapper = () => {
  return (
    <MainWrap>
      <SideBarRecruiter />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/jobs" />} />
          <Route path="jobs" element={<JobPostings />} />
          <Route path="jobs/:id" element={<ShowJobPosted />} />
          <Route path="jobs/create" element={<NewJob />} />
          <Route path="profile" element={<RecruiterProfile />} />
          <Route path="*" element={<Navigate to="/jobs" replace={true} />} />
         
        </Route>
      </Routes>
    </MainWrap>
  );
};

export default RecruiterWrapper;
