import { FaPlay } from "react-icons/fa";
import card1 from '../../assets/panda.jpeg';
import card2 from '../../assets/squidgame.jpg';
import card3 from '../../assets/card3.jpg';
import card5 from '../../assets/card5.jpg';

const Home = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
                {/* Slide 1 */}
                <div id="item1" className="carousel-item relative w-full">
                    <img
                        src={card1}
                        className="w-full h-full object-cover"
                        alt="Kung Fu Panda"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white">
                        <h2 className="text-3xl font-bold mb-2">Kung Fu Panda</h2>
                        <p className="max-w-md mb-4">
                            After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.
                        </p>
                        {/* Play Button */}
                        <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                            <FaPlay /> Play Now
                        </button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="item2" className="carousel-item relative w-full">
                    <img
                        src={card2}
                        className="w-full h-full object-cover"
                        alt="Squid Game"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white">
                        <h2 className="text-3xl font-bold mb-2">Squid Game season 2</h2>
                        <p className="max-w-md mb-4">
                            Hundreds of cash-strapped players accept a strange invitation to compete in children's games. A tempting prize awaits, but with deadly high stakes.
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                            <FaPlay /> Play Now
                            <iframe src="" frameborder="0"></iframe>
                        </button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="item3" className="carousel-item relative w-full">
                    <img
                        src={card3}
                        className="w-full h-full object-cover"
                        alt="Movie 3"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white">
                        <h2 className="text-3xl font-bold mb-2">Movie Title 3</h2>
                        <p className="max-w-md mb-4">
                            A thrilling mystery filled with suspense and surprises.
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                            <FaPlay /> Play Now
                        </button>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="item4" className="carousel-item relative w-full">
                    <img
                        src={card5}
                        className="w-full h-full object-cover"
                        alt="Movie 4"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white">
                        <h2 className="text-3xl font-bold mb-2">Movie Title 4</h2>
                        <p className="max-w-md mb-4">
                            An epic fantasy tale that transports you to another world.
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                            <FaPlay /> Play Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex w-full justify-center gap-2 py-4">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Home;
