import { BrowserRouter as Router, Routes,Route } from "react-router";
import PublicLayout from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import AuthenticationLayout from "@/layouts/auth-layout";
import SignInPage from "@/routes/sign-in";
import SignUpPage from "@/routes/sign-up";
import ProtectedLayout from "@/layouts/protected-layout";
import MainLayout from "@/layouts/main-layout";

function App() {
  
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>}></Route> 
        </Route>

        {/* Authentication Layout */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/auth/signin" element={<SignInPage/>}></Route>
          <Route path="/auth/signup" element={<SignUpPage/>}></Route>
        </Route>


        {/* protected routes */}
        <Route element={<ProtectedLayout> <MainLayout/> </ProtectedLayout>}>
            {/* add all the protected routes */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
