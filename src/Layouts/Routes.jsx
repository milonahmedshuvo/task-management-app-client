import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Login from "../User/Login";
import Register from "../User/Register";
import HomeLayout from "./Home/HomeLayout";
import TaskCreation from "../Components/TaskCreation/TaskCreation";
import Teamadd from "../Components/Teamadd/Teamadd";
import TeamtaskViewManage from "../Components/TeamtaskViewManage/TeamtaskViewManage";

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
                path: "/",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/home",
        element: <HomeLayout/>,
        children:[
            {
                path:"/home/taskcreation",
                element: <TaskCreation/>
            },
            {
                path: "/home",
                element: <Teamadd/>
            },
            {
                path:"/home/teamtaskviewmanage",
                element:<TeamtaskViewManage/>
            }
        ]
    }
])


export default router