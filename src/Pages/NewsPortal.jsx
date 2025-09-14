import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NewsPortal = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Latest", "Trending", "Upcoming"];

    useEffect(() => {
        fetch("http://localhost:4000/news") // Replace with your API
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
        if (category === "All") {
            setFilteredNews(news);
        } else {
            const filtered = news.filter(item => item.category === category);
            setFilteredNews(filtered);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-600 font-serif text-center mb-6">
                    Movies Galaxy News Portal
                </h1>

                {/* Categories Filter */}
                <div className="flex justify-center gap-4 mb-6">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleFilter(cat)}
                            className={`px-4 py-2 rounded-full font-semibold text-sm ${activeCategory === cat
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600 border border-blue-600"
                                } hover:bg-blue-500 hover:text-white transition`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <p className="text-center text-gray-600">Loading news...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredNews.length > 0 ? (
                            filteredNews.map((item) => (
                                <div key={item._id} className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <figure className="w-full h-48 overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </figure>
                                    <div className="p-4">
                                        <h2 className="card-title text-xl font-semibold text-gray-800">{item.title}</h2>
                                        <p className="text-gray-600 mt-2 text-sm line-clamp-3">{item.summary}</p>
                                        <p className="text-gray-400 mt-2 text-xs">Published: {new Date(item.date).toLocaleDateString()}</p>
                                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">{item.category}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600 col-span-full">No news found in this category.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsPortal;
