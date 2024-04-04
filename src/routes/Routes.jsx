import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Roots from "../layouts/Roots";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                
            }
        ]
    }
])

export default routes;