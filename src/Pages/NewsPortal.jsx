import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NewsPortal = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Latest", "Trending", "Upcoming"];

    useEffect(() => {
        fetch("https://movies-galaxy-server.vercel.app/news")
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setFilteredNews(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: "error",
                    title: "Failed to load news",
                    text: "Please try again later.",
                    confirmButtonColor: "#2563eb",
                });
                setLoading(false);
            });
    }, []);

    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === "All") setFilteredNews(news);
        else setFilteredNews(news.filter(item => item.category === category));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
            <div className="max-w-6xl mx-auto text-gray-700 dark:text-gray-300">
                <h1 className="text-4xl font-bold text-blue-600 dark:text-cyan-400 font-serif text-center mb-6">
                    Movies Galaxy News Portal
                </h1>

                <div className="flex justify-center gap-4 mb-6">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleFilter(cat)}
                            className={`px-4 py-2 rounded-full font-semibold text-sm ${activeCategory === cat
                                    ? "bg-blue-600 text-white dark:bg-cyan-500"
                                    : "bg-white text-blue-600 dark:bg-gray-700 dark:text-cyan-400 border border-blue-600 dark:border-cyan-400"
                                } hover:bg-blue-500 hover:text-white transition`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <p className="text-center">Loading news...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredNews.length > 0 ? (
                            filteredNews.map(item => (
                                <div key={item._id} className="card bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <figure className="w-full h-48 overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </figure>
                                    <div className="p-4">
                                        <h2 className="card-title text-xl font-semibold text-gray-800 dark:text-gray-200">{item.title}</h2>
                                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">{item.summary}</p>
                                        <p className="text-gray-400 dark:text-gray-400 mt-2 text-xs">Published: {new Date(item.date).toLocaleDateString()}</p>
                                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 dark:bg-cyan-700 text-blue-800 dark:text-cyan-100 rounded-full">{item.category}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full">No news found in this category.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsPortal;
