import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import Customize from "./Customize";

const AdminProfile = () => {
    const moviesData = useLoaderData();
    return (
        <>
            <div className="flex justify-center gap-5">
                <div className="text-center mt-5">
                    <NavLink to="/addMovies">
                        <button
                            type="button"
                            aria-label="Add new movies"
                            className="btn btn-ghost text-xl text-cyan-600 mb-8 gap-2 hover:text-cyan-800 hover:scale-105 transition group"
                            style={{ fontFamily: "Rancho, cursive" }}
                        >
                            Add Movies
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
                {
                    moviesData.map((movie) => <Customize key={movie._id} movie={movie}></Customize>)
                }
            </div>
        </>
    );
};

export default AdminProfile;
