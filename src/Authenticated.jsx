import React from "react";
import Wrapper from "./components/Wrapper";
import RecruiterWrapper from "./components/RecruiterWrapper";
import { useAuth } from "./context/auth-context";
const AuthenticatedApp = () => {
  const { user } = useAuth();
  return <>{user.company_name ? <RecruiterWrapper /> : <Wrapper />}</>;
};

export default AuthenticatedApp;
