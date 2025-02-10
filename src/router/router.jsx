import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import LostAndFoundItems from "../pages/LostAndFoundItems";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddLostAndFoundItem from "../pages/ProtectedPages/AddLostAndFoundItem";
import AllRecoveredItems from "../pages/ProtectedPages/AllRecoveredItems";
import ManageMyItems from "../pages/ProtectedPages/ManageMyItems";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PostDetails from "../pages/PostDetails";
import UpdatePost from "../pages/UpdatePost";
import Error from "../components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/lost-and-found-items',
        element: <LostAndFoundItems></LostAndFoundItems>,
        loader: () => fetch('https://track-n-trace-server.vercel.app/all-items')
    },
    {
        path: '/add-items',
        element: <PrivateRoute><AddLostAndFoundItem></AddLostAndFoundItem></PrivateRoute>
    },
    {
        path: '/all-recovered-items',
        element: <PrivateRoute><AllRecoveredItems></AllRecoveredItems></PrivateRoute>,
        loader: ()=> fetch('https://track-n-trace-server.vercel.app/recovered-items')
    },
    {
        path: '/manage-my-items',
        element: <PrivateRoute><ManageMyItems></ManageMyItems></PrivateRoute>,
        loader: ()=>fetch('https://track-n-trace-server.vercel.app/all-items')
    },
    {
        path:'/item/:id',
        element:<PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://track-n-trace-server.vercel.app/all-items/${params.id}`)
    },
    {
        path:'/updateItems/:id',
        element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
        loader: ({params})=> fetch(`https://track-n-trace-server.vercel.app/all-items/${params.id}`)
    },
    {
        path:'*',
        element:<Error></Error>
    }
]);

export default router;