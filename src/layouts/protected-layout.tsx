import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router";
import LoaderPage from "@/routes/LoaderPage";

const ProtectedLayout = ({ children }:{children : React.ReactNode }) => {

  const {isLoaded, isSignedIn}  = useAuth();

  if(!isLoaded){
    return <LoaderPage/>;
  }

  if(!isSignedIn){
    return <Navigate to="/auth/signin" replace/>
  }

  return (
    children
  )
}

export default ProtectedLayout;
