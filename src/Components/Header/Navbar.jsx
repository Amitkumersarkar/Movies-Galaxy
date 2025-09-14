import { NavLink } from "react-router-dom";
import { GiGalaxy } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100/90  backdrop-blur-md shadow-md px-4 md:px-6 lg:px-8 sticky top-0 z-50">
            {/* Left - Logo + Hamburger */}
            <div className="flex items-center gap-3 flex-shrink-0">
                {/* Mobile Hamburger */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>

                    {/* Mobile Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-lg w-52 gap-2 z-50"
                    >
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-600 font-bold" : ""}>Home</NavLink></li>
                        <li><NavLink to="/movies" className={({ isActive }) => isActive ? "text-red-600 font-bold" : ""}>All Movies</NavLink></li>
                        <li>
                            <details>
                                <summary>Movies</summary>
                                <ul className="p-2 space-y-1 bg-base-100 shadow rounded-lg">
                                    <li><NavLink to="/movies/hollywood">Hollywood</NavLink></li>
                                    <li><NavLink to="/movies/bollywood">Bollywood</NavLink></li>
                                    <li><NavLink to="/movies/animation">Animation</NavLink></li>
                                    <li><NavLink to="/movies/tamil">Tamil</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>TV Series</summary>
                                <ul className="p-2 space-y-1 bg-base-100 shadow rounded-lg">
                                    <li><NavLink to="/series/english">English Series</NavLink></li>
                                    <li><NavLink to="/series/hindi">Hindi Series</NavLink></li>
                                    <li><NavLink to="/series/korean">Korean Series</NavLink></li>
                                    <li><NavLink to="/series/bangla">Bangla Series</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Genre</summary>
                                <ul className="p-2 space-y-1 bg-base-100 shadow rounded-lg">
                                    <li><NavLink to="/genre/action">Action</NavLink></li>
                                    <li><NavLink to="/genre/adventure">Adventure</NavLink></li>
                                    <li><NavLink to="/genre/comedy">Comedy</NavLink></li>
                                    <li><NavLink to="/genre/crime">Crime</NavLink></li>
                                    <li><NavLink to="/genre/fantasy">Fantasy</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                {/* Logo */}
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-xl md:text-2xl font-bold text-red-600 cursor-pointer tracking-wide"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    <GiGalaxy className="text-2xl md:text-3xl" />
                    <span className="hidden sm:inline">Movies Galaxy</span>
                </NavLink>
            </div>

            {/* Center Menu - Desktop */}
            <div className="hidden lg:flex flex-1 justify-center">
                <ul className="menu menu-horizontal px-1 gap-5 text-md font-medium items-center">
                    <li><NavLink to="/movies" className={({ isActive }) => isActive ? "text-red-600 font-bold" : ""}>All Movies</NavLink></li>
                    <li>
                        <details>
                            <summary className="hover:text-primary cursor-pointer px-3 py-2">Movies</summary>
                            <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                <li><NavLink to="/movies/hollywood">Hollywood</NavLink></li>
                                <li><NavLink to="/movies/bollywood">Bollywood</NavLink></li>
                                <li><NavLink to="/movies/animation">Animation</NavLink></li>
                                <li><NavLink to="/movies/tamil">Tamil</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="hover:text-primary cursor-pointer px-3 py-2">TV Series</summary>
                            <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                <li><NavLink to="/series/english">English Series</NavLink></li>
                                <li><NavLink to="/series/hindi">Hindi Series</NavLink></li>
                                <li><NavLink to="/series/korean">Korean Series</NavLink></li>
                                <li><NavLink to="/series/bangla">Bangla Series</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="hover:text-primary cursor-pointer px-3 py-2">Genre</summary>
                            <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                <li><NavLink to="/genre/action">Action</NavLink></li>
                                <li><NavLink to="/genre/adventure">Adventure</NavLink></li>
                                <li><NavLink to="/genre/comedy">Comedy</NavLink></li>
                                <li><NavLink to="/genre/crime">Crime</NavLink></li>
                                <li><NavLink to="/genre/fantasy">Fantasy</NavLink></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            {/* Right - Search & Profile */}
            <div className="flex items-center md:ml-auto gap-4  flex-shrink-0">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered w-28 sm:w-40 md:w-52 lg:w-64 text-sm"
                />

                {/* Avatar Dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost mb-2 btn-circle avatar">
                        <div className="w-10  rounded-full">
                            <img
                                alt="Profile"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-3 shadow text-cyan-700 font-sans font-semibold bg-base-200 rounded-lg w-52 gap-2"
                    >
                        <li><NavLink to="/profile">Admin Profile</NavLink></li>
                        <li><NavLink to="/dashboard">Admin Dashboard</NavLink></li>
                        <li><NavLink to="/signUp">SignUp</NavLink></li>
                        <li><NavLink to="/signIn">SignIn</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
