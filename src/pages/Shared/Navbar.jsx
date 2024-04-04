import { Link } from "react-router-dom";
import defaultUser from '../../assets/user.png'

const Navbar = () => {
    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Career</Link></li>
    </>
    return (
        <div className="flex justify-center items-center bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2 md:gap-5">
                <div>
                    <details className="dropdown cursor-pointer">
                        <summary className="list-none">
                            <div className="w-11">
                                <img className="rounded-full" alt="Tailwind CSS Navbar component" src={defaultUser} />
                            </div>
                        </summary>
                        <ul className="p-2 mt-2  shadow-2xl menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                            <li><a>Profile</a></li>
                            <li><a>Setting</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </details>
                </div>
                <Link to="/login">
                    <button className="py-2 px-5 bg-[#403F3F] text-white rounded-sm">Login</button>
                </Link>
            </div>
        </div >
    );
};

export default Navbar;