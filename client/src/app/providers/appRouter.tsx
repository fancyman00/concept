import {createBrowserRouter} from "react-router-dom";
import {BaseLayout} from "../layouts/base";
import {Home} from "../../pages/home";
import {Contacts} from "../../pages/contacts";
import {Products} from "../../pages/products";
import {Article} from "../../pages/article";

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
                element: <Products/>,
            },
            {
                path: '/products/:id',
                element: <Article/>,
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
            {
                path: '/my-cart',
                element: <div></div>,
            },
        ],
    },
],
{
    basename: '/',
});