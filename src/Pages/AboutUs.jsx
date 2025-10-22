import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold font-serif text-blue-600 dark:text-cyan-400">About Us</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-300 font-serif text-sm">
                        Learn more about Movies Galaxy, our mission, and the team behind it.
                    </p>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>Welcome to <span className="font-semibold text-blue-600 dark:text-cyan-400">Movies Galaxy</span> – your ultimate movie destination.</p>
                    <p>Effortless, fun, and engaging experience for film enthusiasts.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-cyan-400 mb-4">Mission & Vision</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                        <span className="font-bold text-red-600 dark:text-red-400">Mission :</span> Seamless movie browsing and watching.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold text-purple-700 dark:text-purple-400">Vision :</span> Become the most loved platform for movie enthusiasts.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-cyan-400 mb-4">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl text-center shadow-md">
                            <h3 className="font-bold text-lg text-blue-600 dark:text-cyan-400">Amit Sarkar</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Founder & Lead Developer</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl text-center shadow-md">
                            <h3 className="font-bold text-lg text-cyan-600 dark:text-cyan-300">Amrita Sarkar</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Content Manager</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/" className="btn bg-blue-600 hover:bg-blue-800 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-xl shadow-md font-serif">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
