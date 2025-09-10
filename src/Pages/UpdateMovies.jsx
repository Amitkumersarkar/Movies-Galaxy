import { useLoaderData, NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateMovies = () => {
    const movie = useLoaderData();

    if (!movie) return <p>Loading...</p>; // Prevent crash if loader fails

    const { _id, title, genre, category, photo, duration, year, rating, summary } = movie;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedMovie = {
            title: form.title.value,
            genre: form.genre.value,
            category: form.category.value,
            photo: form.photo.value,
            duration: form.duration.value,
            year: form.year.value,
            rating: form.rating.value,
            summary: form.summary.value,
        };

        try {
            const res = await fetch(`http://localhost:4000/movie/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedMovie),
            });
            const data = await res.json();

            Swal.fire({
                title: data.success ? "Success!" : "Oops!",
                text: data.message,
                icon: data.success ? "success" : "error",
                confirmButtonColor: "#3085d6",
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Error",
                text: "Failed to update movie.",
                icon: "error",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <div className="bg-[#FDF9F4] min-h-screen flex flex-col items-center p-5">
            {/* Back Button */}
            <NavLink to="/dashboard">
                <button
                    className="btn btn-ghost text-xl text-cyan-600 mb-8 flex items-center gap-2"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    <FaArrowLeft /> Admin Dashboard
                </button>
            </NavLink>

            {/* Update Form */}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="label text-cyan-500 font-semibold">Movie Title</label>
                            <input
                                name="title"
                                type="text"
                                defaultValue={title}
                                placeholder="Enter Movie Title"
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Genre</label>
                            <input
                                name="genre"
                                type="text"
                                defaultValue={genre}
                                placeholder="Enter Movie Genre"
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Category</label>
                            <input
                                name="category"
                                type="text"
                                defaultValue={category}
                                placeholder="Enter Movie Category"
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Movie Poster URL</label>
                            <input
                                name="photo"
                                type="text"
                                defaultValue={photo}
                                placeholder="Enter Poster Image URL"
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="label text-cyan-500 font-semibold">Duration</label>
                            <input
                                name="duration"
                                type="text"
                                defaultValue={duration}
                                placeholder="Enter Duration (e.g., 2h 15m)"
                                className="input input-bordered bg-gray-200 w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Release Year</label>
                            <input
                                name="year"
                                type="number"
                                defaultValue={year}
                                placeholder="Enter Release Year"
                                min="1900"
                                max={new Date().getFullYear()}
                                className="input input-bordered bg-gray-200 w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Rating</label>
                            <input
                                name="rating"
                                type="number"
                                defaultValue={rating}
                                placeholder="Enter Rating (0-10)"
                                min="0"
                                max="10"
                                step="0.1"
                                className="input input-bordered bg-gray-200 w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Summary</label>
                            <textarea
                                name="summary"
                                defaultValue={summary}
                                placeholder="Enter Movie Summary"
                                className="textarea textarea-bordered bg-gray-200 w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full py-3 bg-[#D2B48C] text-[#331A15] text-xl font-semibold rounded-md hover:bg-[#c9a77b] transition-colors"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    Update Movie
                </button>
            </form>
        </div>
    );
};

export default UpdateMovies;
