import SignInPage from "@/routes/sign-in";
import { BrowserRouter as Router, Routes,Route } from "react-router";
import PublicLayout from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import AuthenticationLayout from "@/layouts/auth-layout";
import SignUpPage from "@/routes/sign-up";
import ProtectedLayout from "@/layouts/protected-layout";
import MainLayout from "@/layouts/main-layout";
import { Generate } from "./components/generate";
import path from "path";
import Dashboard from "./routes/dashboard";

function App() {
  // console.log("CLERK KEY =>", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);
  
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>}></Route> 
        </Route>

        {/* Authentication Layout */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/auth/signin/*" element={<SignInPage/>}></Route>
          <Route path="/auth/signup/*" element={<SignUpPage/>}></Route>
        </Route>


        {/* protected routes */}
        <Route element={<ProtectedLayout> <MainLayout/> </ProtectedLayout>}>
            {/* add all the protected routes */}
            <Route path = "/generate" element={<Generate/> }> 
              <Route index element={<Dashboard/>}></Route>
            </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
