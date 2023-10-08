import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Preview} from "Components/Preview/Preview";
import {ButtonPalette} from "Components/ButtonPalette/ButtonPalette";
import {SelectPalette} from "Components/Select/SelectPalette";
import MainPage from "MainPage/MainPage";
import {ErrorPage} from "Router/error-page";
import {CustomRating} from "Components/CustomeRating/CustomRating";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '', // Пустой путь, который будет соответствовать по умолчанию
                element: <Preview />,
            },
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
                element: <SelectPalette />,
            },
            {
                path: '/rating',
                element: <CustomRating />
            }
        ]
    }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);