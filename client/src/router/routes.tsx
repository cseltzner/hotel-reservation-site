import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import EventsPage from "../pages/Events/EventsPage.tsx";
import MenuPage from "../pages/Menu/MenuPage.tsx";
import FaqPage from "../pages/Faq/FaqPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <HomePage />},
            {path: "/events", element: <EventsPage />},
            {path: "/menu", element: <MenuPage />},
            {path: "/faq", element: <FaqPage />}
        ]
    }
])