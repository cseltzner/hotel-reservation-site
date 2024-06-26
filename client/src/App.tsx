import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header.tsx";
import NavMenu from "./layout/NavigationMenu/NavMenu.tsx";

const App = () => {
    return (
        <div>
            <Header />
            <NavMenu />
            <Outlet />
        </div>
    );
};

export default App;