import React from "react";
import Wrapper from "./components/Wrapper";
import { Routes, Route, Router, Navigate } from "react-router-dom";

const AuthenticatedApp = () => {
  return (
    <div>
      <Wrapper />
    </div>
  );
};

export default AuthenticatedApp;
{
  /* <Routes>
<Route path="/" element={<Navigate to={"/"}/>}/>
</Routes>   */
}
