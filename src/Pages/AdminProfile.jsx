import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminProfile = () => {
    return (
        <>
            <div className="text-center mt-5">
                <NavLink to="/addMovies">
                    <button
                        className="btn btn-ghost text-xl bg-transparent text-cyan-600 mb-8 gap-2"
                        style={{ fontFamily: "Rancho, cursive" }}
                    >
                        Add Movies<FaArrowRight />
                    </button>
                </NavLink>
            </div>
        </>
    );
};

export default AdminProfile;