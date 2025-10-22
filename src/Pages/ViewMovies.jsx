import { useLoaderData } from "react-router-dom";
import AllMoviesCard from "./AllMoviesCard";

const ViewMovies = () => {
    const movies = useLoaderData();

    return (
        <div className="w-11/12 max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
                <AllMoviesCard key={movie._id} movie={movie} />
            ))}
        </div>
    );
};

export default ViewMovies;
