
const Iframe = () => {

    return (
        <>
            <h1 className="font-semibold text-center p-3 text-xl font-serif">Watch Upcoming Movie Trailer</h1>
            <div className="flex justify-center items-center min-h-screen bg-black">
                <iframe
                    width="900"
                    height="500"
                    src="https://www.youtube.com/embed/zgGTVaG2UiQ?start=20"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl shadow-lg"
                ></iframe>
            </div>
            <div className="flex justify-around gap-2">

                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_inKs4eeHiI?si=UzMRITg0dHP0q1c_&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY?si=ofTRksw60mwEQeQW&amp;start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QOdF1zK4ZkY?si=pB9kVjhfJOnIZIu1&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
};

export default Iframe;
