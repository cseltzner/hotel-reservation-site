import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import EventsPage from "../pages/Events/EventsPage.tsx";
import MenuPage from "../pages/Menu/MenuPage.tsx";
import FaqPage from "../pages/Faq/FaqPage.tsx";
import ContactPage from "../pages/Contact/ContactPage.tsx";
import ContactSubmit from "../pages/Contact/ContactSubmit.tsx";
import NotFoundPage from "../pages/NotFound/NotFoundPage.tsx";
import AboutPage from "../pages/About/AboutPage.tsx";
import NewsletterCompleted from "../pages/Newsletter/NewsletterCompleted.tsx";
import RoomPage from "../pages/Rooms/RoomPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <HomePage />},
            {path: "/events", element: <EventsPage />},
            {path: "/menu", element: <MenuPage />},
            {path: "/faq", element: <FaqPage />},
            {path: "/contact", element: <ContactPage />},
            {path: "/contactsubmit", element: <ContactSubmit />},
            {path: "/about", element: <AboutPage />},
            {path: "/newslettercomplete", element: <NewsletterCompleted />},
            {path: "/rooms", element: <RoomPage />},
            {path: "*", element: <NotFoundPage />}
        ]
    }
])