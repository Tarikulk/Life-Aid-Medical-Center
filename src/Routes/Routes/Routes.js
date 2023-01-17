import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import DoctorsDetails from "../../Pages/Shared/DoctorsDetails/DoctorsDetails";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/doctors/:id",
                element:<DoctorsDetails></DoctorsDetails>,
                loader: ({params}) => fetch(`https://simmi-foundation-assignment-server.vercel.app/doctors/${params.id}`) 
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            }
        ]
    }
])