import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (

    <div>
        <Navbar></Navbar>
        <main className="max-w-7xl mx-auto px-4 min-h-screen">
            <Outlet></Outlet>
        </main>

        <Footer></Footer>
      
    </div>
  );
};

export default MainLayout;