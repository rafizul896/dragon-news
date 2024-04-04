import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-5 py-5">
                <button className="bg-[#D72050] text-white px-4 py-2 rounded-sm">Latest</button>
                <Marquee pauseOnHover={true} speed={100} className="bg-[#F3F3F3] py-2 font-semibold">
                    <Link to="">
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;