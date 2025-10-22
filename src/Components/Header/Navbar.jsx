import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiGalaxy } from "react-icons/gi";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [openMenus, setOpenMenus] = useState({ movies: false, series: false, genre: false });

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);

        const header = document.getElementById("navbar-header");
        if (header) setNavbarHeight(header.offsetHeight);

        const handleResize = () => {
            if (header) setNavbarHeight(header.offsetHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const toggleMenu = (menu) => {
        setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <>
            <header
                id="navbar-header"
                className="fixed top-0 left-0 w-full backdrop-blur-md bg-base-100/80 shadow-lg z-50 transition-all duration-300"
            >
                <div className="navbar px-3 sm:px-4 md:px-6 lg:px-10 flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                        <button
                            className="lg:hidden btn btn-ghost btn-square"
                            onClick={() => setIsSidebarOpen(true)}
                        >
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
                        </button>
                        <NavLink
                            to="/"
                            className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-red-600 cursor-pointer tracking-wide"
                            style={{ fontFamily: "Rancho, cursive" }}
                        >
                            <GiGalaxy className="text-2xl sm:text-3xl" />
                            <span className="hidden xs:inline sm:inline">Movies Galaxy</span>
                        </NavLink>
                    </div>

                    <div className="hidden lg:flex flex-1 justify-center">
                        <ul className="menu menu-horizontal px-1 gap-5 text-md font-medium items-center">
                            <li>
                                <NavLink
                                    to="/all-movies"
                                    className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "")}
                                >
                                    All Movies
                                </NavLink>
                            </li>
                            <li>
                                <details className="group">
                                    <summary className="hover:text-primary cursor-pointer px-3 py-2 group-open:text-red-600 transition-colors">
                                        Movies
                                    </summary>
                                    <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                        <li><NavLink to="/movies/hollywood">Hollywood</NavLink></li>
                                        <li><NavLink to="/movies/bollywood">Bollywood</NavLink></li>
                                        <li><NavLink to="/movies/animation">Animation</NavLink></li>
                                        <li><NavLink to="/movies/tamil">Tamil</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group">
                                    <summary className="hover:text-primary cursor-pointer px-3 py-2 group-open:text-red-600 transition-colors">
                                        TV Series
                                    </summary>
                                    <ul className="p-3 space-y-2 bg-base-100 shadow-lg rounded-lg min-w-[150px]">
                                        <li><NavLink to="/series/english">English</NavLink></li>
                                        <li><NavLink to="/series/hindi">Hindi</NavLink></li>
                                        <li><NavLink to="/series/korean">Korean</NavLink></li>
                                        <li><NavLink to="/series/bangla">Bangla</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group">
                                    <summary className="hover:text-primary cursor-pointer px-3 py-2 group-open:text-red-600 transition-colors">
                                        Genre
                                    </summary>
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

                    <div className="flex items-center gap-2 flex-shrink-0">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered w-24 sm:w-36 md:w-52 lg:w-64 text-sm"
                        />
                        <button className="btn btn-ghost btn-square" onClick={toggleTheme}>
                            {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                        </button>
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
            </header>

            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 left-0 w-64 h-full bg-base-100/95 shadow-xl z-50 p-5 flex flex-col gap-4 overflow-y-auto backdrop-blur-md pb-10"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <button onClick={() => setIsSidebarOpen(false)} className="self-end btn btn-ghost">✕</button>
                            <NavLink to="/" className="font-bold text-lg" onClick={() => setIsSidebarOpen(false)}>Home</NavLink>
                            <NavLink to="/all-movies" onClick={() => setIsSidebarOpen(false)}>All Movies</NavLink>

                            <div>
                                <button
                                    className="w-full text-left font-semibold"
                                    onClick={() => toggleMenu("movies")}
                                >
                                    Movies
                                </button>
                                {openMenus.movies && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        <li><NavLink to="/movies/hollywood" onClick={() => setIsSidebarOpen(false)}>Hollywood</NavLink></li>
                                        <li><NavLink to="/movies/bollywood" onClick={() => setIsSidebarOpen(false)}>Bollywood</NavLink></li>
                                        <li><NavLink to="/movies/animation" onClick={() => setIsSidebarOpen(false)}>Animation</NavLink></li>
                                        <li><NavLink to="/movies/tamil" onClick={() => setIsSidebarOpen(false)}>Tamil</NavLink></li>
                                    </ul>
                                )}
                            </div>

                            <div>
                                <button
                                    className="w-full text-left font-semibold mt-2"
                                    onClick={() => toggleMenu("series")}
                                >
                                    TV Series
                                </button>
                                {openMenus.series && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        <li><NavLink to="/series/english" onClick={() => setIsSidebarOpen(false)}>English</NavLink></li>
                                        <li><NavLink to="/series/hindi" onClick={() => setIsSidebarOpen(false)}>Hindi</NavLink></li>
                                        <li><NavLink to="/series/korean" onClick={() => setIsSidebarOpen(false)}>Korean</NavLink></li>
                                        <li><NavLink to="/series/bangla" onClick={() => setIsSidebarOpen(false)}>Bangla</NavLink></li>
                                    </ul>
                                )}
                            </div>

                            <div>
                                <button
                                    className="w-full text-left font-semibold mt-2"
                                    onClick={() => toggleMenu("genre")}
                                >
                                    Genre
                                </button>
                                {openMenus.genre && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        <li><NavLink to="/genre/action" onClick={() => setIsSidebarOpen(false)}>Action</NavLink></li>
                                        <li><NavLink to="/genre/adventure" onClick={() => setIsSidebarOpen(false)}>Adventure</NavLink></li>
                                        <li><NavLink to="/genre/comedy" onClick={() => setIsSidebarOpen(false)}>Comedy</NavLink></li>
                                        <li><NavLink to="/genre/crime" onClick={() => setIsSidebarOpen(false)}>Crime</NavLink></li>
                                        <li><NavLink to="/genre/fantasy" onClick={() => setIsSidebarOpen(false)}>Fantasy</NavLink></li>
                                    </ul>
                                )}
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div style={{ height: navbarHeight }} />
        </>
    );
};

export default Navbar;
