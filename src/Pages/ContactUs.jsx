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
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-4">
            <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Contact Info & Map */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold font-serif text-blue-600">Contact Us</h1>
                    <p className="text-gray-600 font-serif">
                        Have questions or feedback? We'd love to hear from you! Reach out using the form or connect with us on social media.
                    </p>

                    {/* Map */}
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902051657348!2d90.39065767496333!3d23.750903384587105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b14f5f3f6f%3A0x8f2193e20a9db1e!2sBangladesh!5e0!3m2!1sen!2sus!4v1694711536401!5m2!1sen!2sus"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Movies Galaxy Location"
                        ></iframe>
                    </div>

                    {/* Social Media */}
                    <div className="flex gap-4 text-white">
                        <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm font-semibold text-cyan-600">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter Your Full Name"
                                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-semibold text-cyan-600">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-semibold text-cyan-600">Message</label>
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                className="textarea textarea-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                                rows={6}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full btn bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md font-serif"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link to="/" className="text-blue-600 font-semibold hover:underline">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
