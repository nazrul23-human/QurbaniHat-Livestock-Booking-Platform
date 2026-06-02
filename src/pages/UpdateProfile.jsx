import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;

    updateUserProfile(name, photo)
      .then(() => {
        toast.success("Profile Updated Successfully");

        navigate("/my-profile");

        window.location.reload();
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
            Update Profile
          </h2>

          <form
            onSubmit={handleUpdate}
            className="space-y-4 mt-4"
          >
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="photo"
              defaultValue={user?.photoURL}
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />

            <button className="btn bg-green-700 text-white  w-full">
              Update Information
            </button>
          </form>

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
