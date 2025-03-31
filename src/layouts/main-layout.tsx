import { Container } from "@/components/container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen ">
      {/* Handler to store user data */}
      <Header/>

      <Container className="flex-groe">
        <main className="flex-grow">
          <Outlet/>
        </main>
      </Container>

      <Footer/>
      
    </div>
  )
}

export default MainLayout;
