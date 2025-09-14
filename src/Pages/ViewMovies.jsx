import { useLoaderData } from "react-router-dom";
import AllMoviesCard from "./AllMoviesCard";

const ViewMovies = () => {
    const movies = useLoaderData();

    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
            {
                movies.map((movie) => <AllMoviesCard key={movie._id} movie={movie}></AllMoviesCard>)
            }
        </div>
    );
};

export default ViewMovies;