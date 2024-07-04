import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import EventsPage from "../pages/Events/EventsPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <HomePage />},
            {path: "/events", element: <EventsPage />}
        ]
    }
])