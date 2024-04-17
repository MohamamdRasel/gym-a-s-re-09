import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Services from "../pages/Home/Services/Services";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import SignUp from "../pages/Register/SignUp";
import Product from "../pages/Home/Products/Product";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/categories.json')
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><Product></Product></PrivateRoute>
            },
           
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('/categories.json')
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>,
                loader: () => fetch('about.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);
export default router;