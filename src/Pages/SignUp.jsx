import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setMessage("Account created successfully!");
            setLoading(false);
        }, 2000);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold font-serif text-blue-600">
                        Sign Up
                    </h1>
                    <p className="mt-2 text-gray-500 font-serif text-sm">
                        Create your account to begin your movie exploration journey with Movies Galaxy.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Full Name</label>
                        <input name="name" type="text" placeholder="Enter Your Full Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">User Name</label>
                        <input name="userName" type="text" placeholder="Enter Your User Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Email</label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Password</label>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <button className="w-full btn bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md font-serif" disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
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
                    Already have an account?{" "}
                    <Link to="/signIn" className="text-blue-700 font-semibold hover:underline">
                        SignIn
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;