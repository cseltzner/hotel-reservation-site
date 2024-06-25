import { Outlet } from "react-router-dom";
import HeaderSecondary from "./layout/HeaderSecondary/HeaderSecondary.tsx";

const App = () => {
    return (
        <div>
            <HeaderSecondary />
            <Outlet />
        </div>
    );
};

export default App;