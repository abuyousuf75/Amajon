import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayouts/Layout";
import Home from "../pages/Home";
import Products from "../pages/products/Products";
import Dashboard from "../pages/Dashboard";
import Deitals from "../pages/products/Deitals";

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Layout></Layout>,
            children:[
                {
                 path:'/',
                 element:<Home></Home>
                },
                {
                 path:'/products',
                 element:<Products></Products>,
                 loader:()=>fetch(`https://dummyjson.com/products`)
                },
                {
                 path:'/details/:id',
                 loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
                 element:<Deitals></Deitals>
                },
                {
                 path:'/dashboard',
                 element:<Dashboard></Dashboard>
                },
            ]
        }
    ])
   

export default router;