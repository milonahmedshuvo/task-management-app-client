import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Login from "../User/Login";
import Register from "../User/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout></RootLayout>,
        children: [
            {
                path: "/login",
                element: <Login/> 
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])


export default router