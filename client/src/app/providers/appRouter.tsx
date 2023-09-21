import {createBrowserRouter} from "react-router-dom";
import {BaseLayout} from "../layouts/base";
import {Home} from "../../pages/home";
import {WriteUs} from "../../pages/write-us";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/products',
                element: <div>Products</div>,
            },
            {
                path: '/solutions',
                element: <div>solutions</div>,
            },
            {
                path: '/service',
                element: <div>service</div>,
            },
            {
                path: '/about',
                element: <div>about</div>,
            },
            {
                path: '/contact-us',
                element: <div>contact-us</div>,
            },
            {
                path: '/write-us',
                element: <WriteUs/>,
            },
        ],
    },
],
{
    basename: '/',
});