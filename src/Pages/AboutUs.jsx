import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-4">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold font-serif text-blue-600">About Us</h1>
                    <p className="mt-2 text-gray-500 font-serif text-sm">
                        Learn more about Movies Galaxy, our mission, and the team behind it.
                    </p>
                </div>

                {/* Introduction */}
                <div className="space-y-4 text-gray-700">
                    <p>
                        Welcome to <span className="font-semibold text-blue-600">Movies Galaxy</span> – your ultimate destination for exploring, customizing, and enjoying the best movies online.
                    </p>
                    <p>
                        Our platform is designed to make movie discovery and watching effortless, fun, and engaging for every film enthusiast.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mission & Vision</h2>
                    <p className="text-gray-700 mb-2">
                        <span className="font-bold text-red-600">Mission :</span> To provide a seamless movie experience where users can browse, watch, and manage movies effortlessly.
                    </p>
                    <p className="text-gray-700">
                        <span className="font-bold text-purple-700">Vision :</span> To become the most loved online platform for movie enthusiasts, connecting people through the magic of films.
                    </p>
                </div>

                {/* Our Team */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-4 rounded-xl text-center shadow-md">
                            <h3 className="font-bold text-lg text-blue-600">Amit Sarkar</h3>
                            <p className="text-gray-600 text-sm mt-1">Founder & Lead Developer</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-xl text-center shadow-md">
                            <h3 className="font-bold text-lg text-cyan-600">Amrita Sarkar</h3>
                            <p className="text-gray-600 text-sm mt-1">Content Manager</p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                    <Link
                        to="/"
                        className="btn bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md font-serif"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
