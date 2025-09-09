import { useState } from "react";

const Iframe = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <h1 className="font-semibold text-center p-3 text-xl md:text-2xl font-serif">
                🎬 Watch Upcoming Movie Trailers
            </h1>

            {/* Main Trailer */}
            <div className="flex justify-center items-center min-h-[60vh] bg-black relative">
                {loading && (
                    <div className="absolute text-white text-lg animate-pulse">
                        Loading trailer...
                    </div>
                )}
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/zgGTVaG2UiQ?start=20&autoplay=1&mute=1"
                    title="Main Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl shadow-lg max-w-5xl w-full"
                    onLoad={() => setLoading(false)}
                ></iframe>
            </div>

            {/* Extra Trailers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {/* Trailer 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/_inKs4eeHiI?start=8"
                        title="Kung Fu Panda Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full"
                    ></iframe>
                    <div className="p-3">
                        <h3 className="font-bold">Kung Fu Panda</h3>
                        <p className="text-sm text-gray-600">
                            Po returns to train a new Dragon Warrior!
                        </p>
                    </div>
                </div>

                {/* Trailer 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/5PSNL1qE6VY?start=15"
                        title="Avatar Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full"
                    ></iframe>
                    <div className="p-3">
                        <h3 className="font-bold">Avatar</h3>
                        <p className="text-sm text-gray-600">
                            Journey back to Pandora with breathtaking visuals.
                        </p>
                    </div>
                </div>

                {/* Trailer 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/QOdF1zK4ZkY?start=3"
                        title="Spiderman Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full"
                    ></iframe>
                    <div className="p-3">
                        <h3 className="font-bold">Spiderman</h3>
                        <p className="text-sm text-gray-600">
                            Peter Parker faces new challenges as Spider-Man.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Iframe;
