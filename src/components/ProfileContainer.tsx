import { useAuth, UserButton } from "@clerk/clerk-react"
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

const ProfileContainer = () => {
  const {isSignedIn,isLoaded}= useAuth();

  if(!isLoaded){
    return <div className="flex items-center">
      <Loader className="min-w-4 min-h-4 animate-spin text-emerald-500"></Loader>
    </div>
  }
  return (
    <div className="felx items-center gap-6 max-w-5 max-h-5">
      {isSignedIn ? (<UserButton afterSignOutUrl="/"/>) : (<Link to={"/auth/signin"}> <Button size={"sm"}>Get Started</Button> </Link>)}
    </div>
  )
}

export default ProfileContainer
