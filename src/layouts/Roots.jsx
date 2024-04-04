import { Outlet } from "react-router-dom";

const Roots = () => {
    return (
        <div className="max-w-7xl w-[95%] mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;