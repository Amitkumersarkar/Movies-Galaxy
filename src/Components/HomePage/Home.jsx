import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import card1 from "../../assets/panda.jpeg";
import card2 from "../../assets/squidgame.jpg";
import card3 from "../../assets/avatar.jpg";
import card4 from "../../assets/spiderman.webp";
import { NavLink } from "react-router-dom";
import { FaMeteor } from "react-icons/fa6";
const slides = [
    {
        id: 1,
        img: card1,
        title: "Kung Fu Panda",
        desc: "After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior...",
    },
    {
        id: 2,
        img: card2,
        title: "Squid Game Season 2",
        desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games...",
    },
    {
        id: 3,
        img: card3,
        title: "Avatar",
        desc: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved...",
    },
    {
        id: 4,
        img: card4,
        title: "Spiderman",
        desc: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man...",
    },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative w-11/12 mx-auto pt-5 pb-5">
                <div className="carousel w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] rounded overflow-hidden shadow-lg relative">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`
              absolute inset-0 transition-opacity duration-1000
              ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
                        >
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 md:p-8 text-white">
                                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-sm md:text-base max-w-md mb-4">{slide.desc}</p>
                                <NavLink
                                    to="/iframe"
                                    className="bg-red-600 hover:bg-red-700 px-3 py-2 md:px-5 md:py-3 rounded-full flex items-center gap-2 shadow-lg text-sm md:text-base"
                                >
                                    <FaPlay /> Play Now
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex w-full justify-center gap-2 py-4">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className={`btn btn-xs ${currentSlide === index ? "btn-active" : ""}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 pb-5">
                <h1 className="text-2xl font-bold ml-3">Popular Movies  </h1>
                <div className="flex items-center text-2xl text-red-600">
                    <FaMeteor />
                </div>
            </div>
        </>
    );
};

export default Home;
