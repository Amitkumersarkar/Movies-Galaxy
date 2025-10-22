import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

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

        fetch('https://movies-galaxy-server.vercel.app/movie', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie),
        })
            .then(() => {
                Swal.fire({ title: 'Movie Added Successfully', icon: 'success', timer: 1500, showConfirmButton: false, toast: true, position: 'top-center' });
                form.reset();
            })
            .catch(err => console.error("Error adding movie:", err));
    };

    return (
        <div className="bg-[#FDF9F4] dark:bg-gray-900 min-h-screen flex flex-col items-center p-5">
            <NavLink to="/dashboard">
                <button className="btn btn-ghost text-xl text-cyan-600 dark:text-cyan-400 mb-8 flex items-center gap-2" style={{ fontFamily: "Rancho, cursive" }}>
                    <FaArrowLeft /> Admin Dashboard
                </button>
            </NavLink>

            <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-cyan-600 dark:text-cyan-400 font-serif text-center">Add New Movie</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["title", "genre", "category", "photo", "duration", "year", "rating"].map(field => (
                        <input key={field} name={field} type="text" placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`} className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-gray-200" required />
                    ))}
                </div>
                <textarea name="summary" placeholder="Movie Summary" className="textarea textarea-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-gray-200 mt-4" required></textarea>
                <button className="btn bg-cyan-600 hover:bg-cyan-800 text-white w-full mt-4 rounded-xl shadow-md font-serif">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovies;
