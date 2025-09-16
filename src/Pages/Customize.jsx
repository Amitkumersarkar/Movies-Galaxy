import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Customize = ({ movie }) => {
    const { _id, title, genre, category, photo, duration, year, rating, summary } = movie;

    // Handle Delete
    const handleDelete = async (id) => {
        try {
            const { isConfirmed } = await Swal.fire({
                title: "Are you sure?",
                text: "This movie will be permanently deleted!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!"
            });

            if (!isConfirmed) return;

            const res = await fetch(`https://movies-galaxy-server.vercel.app/movie/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (data.deletedCount > 0 || data.success) {
                await Swal.fire({
                    title: "Deleted!",
                    text: "Movie has been deleted.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    toast: true,
                    position: "top",
                });
            } else {
                await Swal.fire({
                    title: "Error",
                    text: "Movie was not deleted. Try again.",
                    icon: "error",
                });
            }
        } catch (err) {
            console.error(err);
            await Swal.fire({
                title: "Error",
                text: "Failed to delete movie.",
                icon: "error",
            });
        }
    };

    return (
        <div className="card bg-base-100 w-full sm:w-72 md:w-80 lg:w-96 shadow-md hover:shadow-xl transition duration-300 rounded-xl overflow-hidden border">
            {/* Movie Poster */}
            <figure className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                    src={photo}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded-md">
                    ⭐ {rating}
                </div>
            </figure>

            {/* Movie Details */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{summary}</p>

                <div className="mt-3 text-sm text-gray-700 space-y-1">
                    <p><span className="font-semibold">Genre:</span> {genre}</p>
                    <p><span className="font-semibold">Category:</span> {category}</p>
                    <p><span className="font-semibold">Duration:</span> {duration} min</p>
                    <p><span className="font-semibold">Year:</span> {year}</p>
                </div>

                {/* Actions */}
                <div className="card-actions justify-between mt-4">
                    <Link to={`/movie/${_id}`} className="btn btn-sm btn-primary rounded-lg">
                        Watch Now
                    </Link>
                    <Link to={`/updateMovies/${_id}`} className="btn btn-sm btn-warning rounded-lg">
                        Modify
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-error text-white rounded-lg"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Customize;
