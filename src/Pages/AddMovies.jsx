import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AddMovies = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newMovie = {
            title: form.title.value,
            genre: form.genre.value,
            category: form.category.value,
            photo: form.photo.value,
            duration: form.duration.value,
            year: form.year.value,
            rating: form.rating.value,
            summary: form.summary.value,
        };
        console.log(newMovie); // send to backend
    };

    return (
        <div className="bg-[#FDF9F4] min-h-screen flex flex-col items-center p-5">
            {/* Back Button */}
            <NavLink to="/profile">
                <button
                    className="btn btn-ghost text-xl text-cyan-600 mb-8 flex items-center gap-2"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    <FaArrowLeft /> Admin Profile
                </button>
            </NavLink>

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
                                placeholder="Enter Movie Name"
                                className="input input-bordered bg-gray-200 text-black w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Genre</label>
                            <input
                                name="genre"
                                type="text"
                                placeholder="Enter Movie Genre"
                                className="input input-bordered bg-gray-200 text-black w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Category</label>
                            <input
                                name="category"
                                type="text"
                                placeholder="Enter Movie Category"
                                className="input input-bordered bg-gray-200 text-black w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Movie Poster</label>
                            <input
                                name="photo"
                                type="text"
                                placeholder="Enter Movie Photo URL"
                                className="input input-bordered bg-gray-200 text-black w-full"
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
                                placeholder="Enter Movie Duration"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Release Year</label>
                            <input
                                name="year"
                                type="number"
                                placeholder="Enter Release Year"
                                className="input input-bordered bg-gray-200 text-black w-full"
                                min="1900"
                                max={new Date().getFullYear()}
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Rating</label>
                            <input
                                name="rating"
                                type="number"
                                placeholder="Enter Movie Rating (0-10)"
                                className="input input-bordered bg-gray-200 text-black w-full"
                                min="0"
                                max="10"
                                step="0.1"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Summary</label>
                            <textarea
                                name="summary"
                                placeholder="Enter Movie Summary"
                                className="textarea textarea-bordered bg-gray-200 text-black w-full"
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
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default AddMovies;
