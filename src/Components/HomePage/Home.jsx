import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaMeteor } from "react-icons/fa6";
import { NavLink, useLoaderData } from "react-router-dom";
import card1 from "../../assets/panda.jpeg";
import card2 from "../../assets/squidgame.jpg";
import card3 from "../../assets/avatar.jpg";
import card4 from "../../assets/spiderman.webp";
import MoviesCard from "../../Pages/MoviesCard";

const slides = [
    { id: 1, img: card1, title: "Kung Fu Panda", desc: "After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior..." },
    { id: 2, img: card2, title: "Squid Game Season 2", desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games..." },
    { id: 3, img: card3, title: "Avatar", desc: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved..." },
    { id: 4, img: card4, title: "Spiderman", desc: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man..." },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [theme, setTheme] = useState("light");
    const loadedMovies = useLoaderData();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative w-full max-w-7xl mx-auto pt-6 sm:pt-8 md:pt-12">
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-b ${theme === "dark" ? "from-black/80 via-transparent to-black/60" : "from-white/60 via-transparent to-white/40"} z-0`}></div>
                    <div className="absolute inset-0 overflow-hidden z-10">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute rounded-full opacity-50 animate-star ${theme === "dark" ? "bg-white" : "bg-black/70"}`}
                                style={{
                                    width: `${Math.random() * 2 + 1}px`,
                                    height: `${Math.random() * 2 + 1}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDuration: `${Math.random() * 5 + 5}s`,
                                    animationDelay: `${Math.random() * 5}s`,
                                }}
                            />
                        ))}
                    </div>
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0"}`}>
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover brightness-75 dark:brightness-50 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 text-white z-30">
                                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                                <p className="text-sm sm:text-base md:text-lg max-w-lg mb-4">{slide.desc}</p>
                                <NavLink
                                    to="/iframe"
                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 shadow-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaPlay /> Play Now
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-2 py-4">
                    {slides.map((slide, index) => (
                        <button key={slide.id} onClick={() => setCurrentSlide(index)} className={`btn btn-xs ${currentSlide === index ? "btn-active" : ""}`}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-2 px-4 sm:px-8 mt-6">
                <h1 className="text-2xl sm:text-3xl font-bold">Popular Movies</h1>
                <FaMeteor className="text-red-600 text-2xl sm:text-3xl" />
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4 sm:px-8">
                {loadedMovies.map((movie) => (
                    <div key={movie._id} className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
                        <MoviesCard movies={movie} />
                    </div>
                ))}
            </div>

            <div className="text-center py-6">
                <NavLink to="/all-movies" className="btn btn-secondary px-6 py-3 text-base sm:text-lg transition-transform duration-300 hover:scale-105">
                    View All Movies
                </NavLink>
            </div>

            <style>
                {`
                    @keyframes star {
                        0% { transform: translateY(0) translateX(0); opacity: 0.3; }
                        50% { transform: translateY(20px) translateX(10px); opacity: 0.7; }
                        100% { transform: translateY(0) translateX(0); opacity: 0.3; }
                    }
                    .animate-star {
                        animation-name: star;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease-in-out;
                    }
                `}
            </style>
        </>
    );
};

export default Home;
