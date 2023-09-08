import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Preview} from "../Components/Preview/Preview";
import {ButtonPalette} from "../Components/ButtonPalette/ButtonPalette";
import {Select} from "@mui/material";
import {SelectExample} from "../Components/Select/SelectExsample";




const router = createBrowserRouter([
    {
        path: "/preview",
        element: <Preview />,
    },

    {
        path: "/ButtonPalette",
        element: <ButtonPalette />,
    },
    {
        path: "/select",
        element: <SelectExample />,
    },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);