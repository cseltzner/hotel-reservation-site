import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <HomePage />}
        ]
    }
])