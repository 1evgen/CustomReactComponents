import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import {CustomButton} from "../Components/CustomButton/CustomButton";
import {Preview} from "../Preview";




const router = createBrowserRouter([
    {
        path: "/preview",
        element: <Preview />,

    },

    {
        path: "/button" as 'Button',
        element: <CustomButton />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);