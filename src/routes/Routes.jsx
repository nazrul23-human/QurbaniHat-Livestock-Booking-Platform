import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import AllAnimals from "../pages/AllAnimals";
import AnimalDetails from "../pages/AnimalDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/animals",
                element: <AllAnimals />,
            },
            {
                path: "/animals/:id",
                element: (
                    <PrivateRoute>
                        <AnimalDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-profile",
                element: <UpdateProfile />,
            },

        ],
    },
]);

export default router;