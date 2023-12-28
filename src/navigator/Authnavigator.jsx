import React from "react";
import { useAuth } from "../pages/provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

export const Authnavigator = ({ children }) => {
  const { isloggedin } = useAuth();
  const {pathname} = useLocation()
  console.log(pathname);
  return isloggedin ? children : <Navigate to="/signin" state={{prevPath: pathname}}/>
};
