import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/animals">All Animals</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/my-profile">
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow">
      <div className="navbar max-w-7xl mx-auto">

        {/* Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>

          </div>

          <Link
            to="/"
            className="text-2xl font-bold text-green-700"
          >
            QurbaniHat
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          {user ? (
            <>
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="user"
                className="w-10 h-10 rounded-full"
              />

              <button
                onClick={handleLogout}
                className="btn btn-error btn-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-sm"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary btn-sm"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default Navbar;