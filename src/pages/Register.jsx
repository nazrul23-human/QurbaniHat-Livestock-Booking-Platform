import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        setError("");

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        toast.success("Registration Successful");

                        form.reset();

                        navigate("/login");
                    });

            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="max-w-md mx-auto py-12">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">

                    <h2 className="text-3xl font-bold text-center">
                        Register
                    </h2>

                    <form
                        onSubmit={handleRegister}
                        className="space-y-4 mt-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required
                        />

                        <button
                            className="btn bg-green-700 text-white w-full"
                        >
                            Register
                        </button>
                    </form>

                    {
                        error &&
                        <p className="text-red-500">
                            {error}
                        </p>
                    }

                    <p className="text-center mt-4">
                        Already have an account?

                        <Link
                            to="/login"
                            className="text-blue-500 ml-2"
                        >
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Register;