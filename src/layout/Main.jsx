import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarH from "../components/NavbarH";

const Main = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <NavbarH></NavbarH>
            <Outlet></Outlet>           
        </div>
    );
};

export default Main;