import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-green-700">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="btn bg-green-700 text-white border-none hover:bg-green-800 mt-8"
        >
          Back To Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;
