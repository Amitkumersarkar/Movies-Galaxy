import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setLoading(true);

        try {
            const result = await signInUser(email, password);
            const user = result.user;
            console.log("Logged in:", user);

            Swal.fire({
                icon: "success",
                title: "Welcome Back!",
                text: "Signed in successfully 🎉",
                showConfirmButton: false,
                timer: 2000,
            });

            setLoading(false);

            // Redirect after login
            setTimeout(() => navigate("/dashboard"), 2000);
        } catch (error) {
            console.error("Login error:", error.message);

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message,
                confirmButtonColor: "#2563eb",
            });

            setLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithGoogle()
            .then((result) => {
                console.log("Google user:", result.user);
                Swal.fire({
                    icon: "success",
                    title: "Welcome!",
                    text: `Signed in as ${result.user.displayName}`,
                    showConfirmButton: false,
                    timer: 2000,
                });
                setLoading(false);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error("Google Sign-In error:", error.message);
                Swal.fire({
                    icon: "error",
                    title: "Google Sign-In Failed",
                    text: error.message,
                    confirmButtonColor: "#2563eb",
                });
                setLoading(false);
            });
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
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 font-semibold"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button
                        className="w-full btn bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md font-serif"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                {/* Google Sign In */}
                <div className="text-center mt-4">
                    <p className="text-gray-500 mb-2">Or sign in with</p>
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full btn bg-red-500 hover:bg-red-700 text-white rounded-xl shadow-md font-serif mt-2"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In with Google"}
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center mt-4 text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signUp" className="text-blue-700 font-bold hover:underline">
                        SignUp
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
