import { Link } from "react-router-dom";
import errorImg from "../assets/404.gif";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
            <div className="flex flex-col items-center text-center max-w-lg">
                {/* Error Image */}
                <img
                    src={errorImg}
                    alt="404 Error"
                    className="w-60 sm:w-72 md:w-96 mb-6"
                />

                {/* Error Message */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3">
                    Oops!
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                    The page you are looking for does not exist.
                </p>

                {/* Back Home Button */}
                <Link
                    to="/"
                    className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition duration-300 font-semibold"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
