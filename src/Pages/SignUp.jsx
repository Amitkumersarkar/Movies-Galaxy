import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!validatePassword(password)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must be at least 8 chars with uppercase, lowercase, number & symbol.",
                confirmButtonColor: "#2563eb",
            });
            return;
        }

        setLoading(true);
        createUser(email, password)
            .then(result => {
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt };
                fetch("https://movies-galaxy-server.vercel.app/users", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(newUser),
                }).finally(() => setLoading(false));

                Swal.fire({ icon: "success", title: "Account Created!", showConfirmButton: false, timer: 2000 });
                setTimeout(() => navigate("/signIn"), 2000);
            })
            .catch(error => {
                Swal.fire({ icon: "error", title: "Sign Up Failed", text: error.message, confirmButtonColor: "#2563eb" });
                setLoading(false);
            });
    };

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(result => {
                Swal.fire({ icon: "success", title: "Account Created!", text: `Welcome ${result.user.displayName}`, showConfirmButton: false, timer: 2000 });
                setTimeout(() => navigate("/signIn"), 2000);
            })
            .catch(error => {
                Swal.fire({ icon: "error", title: "Google Sign-In Failed", text: error.message, confirmButtonColor: "#2563eb" });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="card w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 text-gray-700 dark:text-gray-300">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold font-serif text-blue-600 dark:text-cyan-400">Sign Up</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 font-serif text-sm">Create your account to begin your journey.</p>
                </div>

                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Full Name</label>
                        <input name="name" type="text" placeholder="Enter Your Full Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-gray-200" required />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Email</label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-gray-200" required />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Password</label>
                        <div className="relative">
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="Enter a Strong Password" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400 pr-12 dark:bg-gray-700 dark:text-gray-200" required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 dark:text-cyan-400 font-semibold">{showPassword ? "Hide" : "Show"}</button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Must be 8+ chars with uppercase, lowercase, number & symbol.</p>
                    </div>
                    <button className="w-full btn bg-blue-600 hover:bg-blue-800 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-xl shadow-md font-serif" disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-500 dark:text-gray-400 mb-2">Or sign up with</p>
                    <button onClick={handleGoogleSignUp} className="w-full btn bg-red-500 hover:bg-red-700 text-white rounded-xl shadow-md font-serif mt-2">Sign Up with Google</button>
                </div>

                <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Already have an account? <Link to="/signIn" className="text-green-600 dark:text-cyan-400 font-bold hover:underline">SignIn</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
