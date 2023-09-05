import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Preview} from "../Components/Preview/Preview";
import {ButtonPalette} from "../Components/ButtonPalette/ButtonPalette";




const router = createBrowserRouter([
    {
        path: "/preview",
        element: <Preview />,

    },

    {
        path: "/ButtonPalette",
        element: <ButtonPalette />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);