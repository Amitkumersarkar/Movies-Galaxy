import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Customize = ({ movie }) => {
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://movies-galaxy-server.vercel.app/movie/${id}`, {
                    method: "DELETE",
                })
                    .then(() => {
                        Swal.fire("Deleted!", "Movie has been deleted.", "success");
                        window.location.reload();
                    })
                    .catch((err) => console.error(err));
            }
        });
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <img
                src={movie.photo}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-4 text-gray-800 dark:text-gray-200">
                <h3 className="text-xl font-semibold mb-1">{movie.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{movie.genre} | {movie.category} | {movie.year}</p>
                <p className="text-sm mb-4 line-clamp-3">{movie.summary}</p>
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => handleDelete(movie._id)}
                        className="flex items-center gap-2 btn btn-sm bg-red-500 hover:bg-red-700 text-white rounded-xl shadow-md"
                    >
                        <FaTrash /> Delete
                    </button>
                    <button
                        className="flex items-center gap-2 btn btn-sm bg-cyan-600 hover:bg-cyan-800 text-white rounded-xl shadow-md"
                    >
                        <FaEdit /> Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Customize;
