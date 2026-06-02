import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");
        navigate("/");
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
            Login
          </h2>

          <form
            onSubmit={handleLogin}
            className="space-y-4 mt-4"
          >
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

            <button className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn w-full"
          >
            Continue with Google
          </button>

          {error && (
            <p className="text-red-500 mt-3">
              {error}
            </p>
          )}

          <p className="text-center mt-4">
            Don't have an account?

            <Link
              to="/register"
              className="text-blue-500 ml-2"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;