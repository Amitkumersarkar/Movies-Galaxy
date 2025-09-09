import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminProfile = () => {
    return (
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
    );
};

export default AdminProfile;
