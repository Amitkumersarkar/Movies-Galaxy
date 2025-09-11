import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        setLoading(true);

        // fake sign-in process
        setTimeout(() => {
            setMessage("Signed in successfully!");
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold font-serif text-blue-600">
                        Sign In
                    </h1>
                    <p className="mt-2 text-gray-500 font-serif text-sm">
                        Welcome back! Please login to continue your journey.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Email</label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Password</label>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <button className="w-full btn bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md font-serif" disabled={loading}>
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                {/* Message */}
                {message && (
                    <p className="mt-4 text-center text-sm font-semibold text-red-600">
                        {message}
                    </p>
                )}

                {/* Footer */}
                <p className="text-center mt-4 text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signUp" className="text-blue-700 font-semibold hover:underline">
                        SignUp
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
