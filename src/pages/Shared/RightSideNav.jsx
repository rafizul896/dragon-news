import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub,FaTwitter,FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

import swimming from "../../assets/qZone1.png";
import classRoom from "../../assets/qZone2.png";
import playGround from "../../assets/qZone3.png"


const RightSideNav = () => {
    return (
        <div className="">
            <div className="p-2">
                <h1 className="font-bold text-xl">Login Width</h1>
                <div className="space-y-3 mt-5">
                    <button className="btn w-full btn-outline">
                        <IoLogoGoogle className="text-lg" />
                        Login with Google
                    </button>
                    <button className="btn w-full btn-outline">
                        <FaGithub className="text-lg" />
                        Login width Github
                    </button>
                </div>
            </div>

            <div className="p-2">
                <h1 className="font-bold text-xl">Find Us On</h1>
                <div className=" mt-5">
                    <a className="flex items-center gap-2 p-3 text-[#706F6F] font-medium rounded-md cursor-pointer hover:text-blue-500 hover:border-blue-500 border w-full border-b-0 hover:border-b">
                        <FaFacebookF className="text-lg text-[#3B599C]" />
                        Facebook
                    </a>
                    <a className="flex items-center gap-2 p-3 text-[#706F6F] font-medium rounded-md cursor-pointer hover:text-blue-500 hover:border-blue-500 border w-full border-b-0 hover:border-b">
                        <FaTwitter className="text-lg text-[#58A7DE]" />
                        Twitter
                    </a>
                    <a className="flex items-center gap-2 p-3 text-[#706F6F] font-medium rounded-md cursor-pointer hover:text-blue-500 hover:border-blue-500 border w-full">
                        <IoLogoInstagram className="text-xl text-red-500" />
                        Instragram
                    </a>
                </div>
            </div>

            <div className="p-2">
                <h1 className="font-bold text-xl">Q-Zone</h1>
                <div className="space-y-2 mt-5">
                    <img className="w-full" src={swimming} alt="" />
                    <img className="w-full" src={classRoom} alt="" />
                    <img className="w-full" src={playGround} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;