import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/Layout-component/LeftNavbar";
import RightNav from "../Components/Layout-component/RightNav";
import Navbar from "../Components/Navbar";


const HomeLayouts = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
            </header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <section className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </section>
            <main className="w-11/12 mx-auto pt-5 grid grid-cols-12 gap-4">
                <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3"><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayouts;