import { Link } from "react-router-dom";
import { GiGalaxy } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50">
            {/* Left - Logo + Hamburger */}
            <div className="flex items-center">
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">All Movies</Link></li>

                        <li>
                            <details>
                                <summary>Movies</summary>
                                <ul className="p-2 space-y-1 bg-base-100 shadow rounded-lg">
                                    <li><Link to="/movies/hollywood">Hollywood</Link></li>
                                    <li><Link to="/movies/bollywood">Bollywood</Link></li>
                                    <li><Link to="/movies/animation">Animation</Link></li>
                                    <li><Link to="/movies/tamil">Tamil</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>TV Series</summary>
                                <ul className="p-2 space-y-1 bg-base-100 shadow rounded-lg">
                                    <li><Link to="/series/english">English Series</Link></li>
                                    <li><Link to="/series/hindi">Hindi Series</Link></li>
                                    <li><Link to="/series/korean">Korean Series</Link></li>
                                    <li><Link to="/series/bangla">Bangla Series</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Genre</summary>
                                <ul className="p-2 space-y-1 bg-base-100 shadow rounded-lg">
                                    <li><Link to="/genre/action">Action</Link></li>
                                    <li><Link to="/genre/adventure">Adventure</Link></li>
                                    <li><Link to="/genre/comedy">Comedy</Link></li>
                                    <li><Link to="/genre/crime">Crime</Link></li>
                                    <li><Link to="/genre/fantasy">Fantasy</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-2xl font-bold text-red-600 cursor-pointer tracking-wide ml-2"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    <GiGalaxy /> Movies Galaxy
                </Link>
            </div>

            {/* Center Menu - Desktop */}
            <div className="hidden lg:flex justify-center flex-1">
                <ul className="menu menu-horizontal px-1 gap-5 text-md font-medium items-center">
                    <li><Link to="/movies">All Movies</Link></li>
                    <li>
                        <details>
                            <summary className="hover:text-primary cursor-pointer px-3 py-2">Movies</summary>
                            <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                <li><Link to="/movies/hollywood">Hollywood</Link></li>
                                <li><Link to="/movies/bollywood">Bollywood</Link></li>
                                <li><Link to="/movies/animation">Animation</Link></li>
                                <li><Link to="/movies/tamil">Tamil</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="hover:text-primary cursor-pointer px-3 py-2">TV Series</summary>
                            <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                <li><Link to="/series/english">English Series</Link></li>
                                <li><Link to="/series/hindi">Hindi Series</Link></li>
                                <li><Link to="/series/korean">Korean Series</Link></li>
                                <li><Link to="/series/bangla">Bangla Series</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="hover:text-primary cursor-pointer px-3 py-2">Genre</summary>
                            <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                <li><Link to="/genre/action">Action</Link></li>
                                <li><Link to="/genre/adventure">Adventure</Link></li>
                                <li><Link to="/genre/comedy">Comedy</Link></li>
                                <li><Link to="/genre/crime">Crime</Link></li>
                                <li><Link to="/genre/fantasy">Fantasy</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            {/* Right - Search & Profile */}
            <div className="flex items-center gap-4">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search Movies..."
                    className="input input-bordered w-24 sm:w-40 md:w-56 lg:w-64 text-sm"
                />

                {/* Avatar Dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Profile"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-lg w-52 gap-2"
                    >
                        <li><Link to="/profile">Admin Profile</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
