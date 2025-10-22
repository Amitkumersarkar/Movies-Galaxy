import { NavLink } from "react-router-dom";

const AllMoviesCard = ({ movie }) => {
    const { _id, title, genre, category, photo, duration, year, rating, summary } = movie;

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden border border-transparent hover:border-red-500">
            <figure className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                    src={photo}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded-md">
                    ⭐ {rating}
                </div>
            </figure>

            <div className="p-4 text-gray-800 dark:text-gray-200">
                <h2 className="text-lg font-bold mb-1">{title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-2">{summary}</p>

                <div className="mt-2 text-sm space-y-1">
                    <p><span className="font-semibold">Genre:</span> {genre}</p>
                    <p><span className="font-semibold">Category:</span> {category}</p>
                    <p><span className="font-semibold">Duration:</span> {duration} min</p>
                    <p><span className="font-semibold">Year:</span> {year}</p>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <NavLink to={`/watchNow/${_id}`} className="btn btn-sm btn-primary rounded-lg">
                        Watch Now
                    </NavLink>
                    <NavLink to={`/details/${_id}`} className="btn btn-sm btn-outline rounded-lg">
                        Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AllMoviesCard;
