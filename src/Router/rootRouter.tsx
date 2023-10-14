import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
     createHashRouter,
    RouterProvider,
} from "react-router-dom";
import {Preview} from "Components/Preview/Preview";
import {ButtonPalette} from "Components/ButtonPalette/ButtonPalette";
import {SelectPalette} from "Components/Select/SelectPalette";
import MainPage from "MainPage/MainPage";
import {ErrorPage} from "Router/helper-components/error-page";
import {CustomRating} from "Components/CustomeRating/CustomRating";
import {ToggleSwitch} from "Components/ToggleSwitch/ToggleSwitch";
import {UnderDevelopment} from "Router/helper-components/UnderDevelopment";


export const router = createHashRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
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
            },
            {
                path: '/toggleSwitch',
                element: <UnderDevelopment />
            }
        ]
    }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);