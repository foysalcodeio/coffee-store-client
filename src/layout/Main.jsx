import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarH from "../components/NavbarH";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <NavbarH></NavbarH>
            <Outlet></Outlet>   
            <Footer></Footer>        
        </div>
    );
};

export default Main;