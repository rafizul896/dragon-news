import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    News Section
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;