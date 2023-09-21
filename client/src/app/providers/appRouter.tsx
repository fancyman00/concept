import {createBrowserRouter} from "react-router-dom";
import {BaseLayout} from "../layouts/base";
import {Home} from "../../pages/home";
import {Contacts} from "../../pages/contacts";

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
                element: <Contacts/>,
            },
        ],
    },
],
{
    basename: '/',
});