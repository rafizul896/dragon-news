import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories)
    return (
        <div className="mt-5 md:mt-0">
            <h1 className="text-lg font-semibold md:mb-5">All Categories</h1>
            <div className="flex flex-col justify-center md:items-center ml-10 md:ml-0">
                <div>
                    {
                        categories.map(categorie => <Link to={`/category/${categorie.id}`} key={categorie.id} className="block text-[#9F9F9F] font-medium mt-3">{categorie.name}</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;