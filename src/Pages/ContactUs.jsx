import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (!name || !email || !message) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Please fill in all fields.",
                confirmButtonColor: "#2563eb",
            });
            return;
        }

        setLoading(true);
        setTimeout(() => {
            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Thank you for contacting us. We will get back to you soon.",
                showConfirmButton: false,
                timer: 2000,
            });
            setLoading(false);
            form.reset();
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <h1 className="text-4xl font-bold font-serif text-blue-600 dark:text-cyan-400">Contact Us</h1>
                    <p>Have questions or feedback? Reach out using the form or social media.</p>

                    <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.917235146829!2d90.36001511498165!3d23.81033158456778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7735b8f7f57%3A0x17e1f82fa0c5e8c4!2sMirpur%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1694700000000!5m2!1sen!2sbd"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            title="Movies Galaxy Location"
                        ></iframe>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full hover:bg-blue-700 transition text-white"><FaFacebookF /></a>
                        <a href="#" className="bg-blue-400 dark:bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition text-white"><FaTwitter /></a>
                        <a href="#" className="bg-pink-500 dark:bg-pink-600 p-3 rounded-full hover:bg-pink-600 transition text-white"><FaInstagram /></a>
                        <a href="#" className="bg-red-600 dark:bg-red-700 p-3 rounded-full hover:bg-red-700 transition text-white"><FaYoutube /></a>
                    </div>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm font-semibold text-cyan-600">Full Name</label>
                            <input name="name" type="text" placeholder="Enter Your Full Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-gray-200" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-semibold text-cyan-600">Email</label>
                            <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-gray-200" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-semibold text-cyan-600">Message</label>
                            <textarea name="message" placeholder="Your message..." rows={6} className="textarea textarea-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-gray-200" required></textarea>
                        </div>
                        <button type="submit" className="w-full btn bg-blue-600 hover:bg-blue-800 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-xl shadow-md font-serif" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <Link to="/" className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
