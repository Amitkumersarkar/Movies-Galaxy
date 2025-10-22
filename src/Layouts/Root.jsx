import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Root = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Root;
