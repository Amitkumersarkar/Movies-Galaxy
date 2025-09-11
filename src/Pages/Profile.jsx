import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        // If you have a signOut function in AuthProvider
        // Otherwise, use Firebase signOut directly
        Swal.fire({
            icon: "question",
            title: "Sign Out",
            text: "Are you sure you want to log out?",
            showCancelButton: true,
            confirmButtonColor: "#2563eb",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out",
        }).then((result) => {
            if (result.isConfirmed) {
                // Sign out using Firebase auth
                import("firebase/auth").then(({ signOut }) => {
                    import("../Firebase/Firebase.config").then(({ default: auth }) => {
                        signOut(auth).then(() => {
                            Swal.fire({
                                icon: "success",
                                title: "Signed Out",
                                text: "You have successfully logged out.",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                            navigate("/signIn");
                        });
                    });
                });
            }
        });
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">You are not logged in. Please sign in first.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-6">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 text-center">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">Your Profile</h1>

                <img
                    src={user.photoURL || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-md"
                />

                <p className="text-lg font-semibold">{user.displayName || "No Name Provided"}</p>
                <p className="text-gray-500">{user.email}</p>

                <button
                    onClick={handleSignOut}
                    className="mt-6 w-full btn bg-red-500 hover:bg-red-700 text-white rounded-xl shadow-md font-semibold"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Profile;
