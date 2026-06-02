import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8">

        <div className="flex flex-col items-center">

          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full object-cover"
          />

          <h2 className="text-3xl font-bold mt-4">
            {user?.displayName}
          </h2>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>

          <Link
            to="/update-profile"
            className="btn bg-green-700 text-white mt-6"
          >
            Update Profile
          </Link>

        </div>

      </div>
    </div>
  );
};

export default MyProfile;