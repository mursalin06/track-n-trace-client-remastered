import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import AllItemsCard from "../components/AllItemsCard";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const LostAndFoundItems = () => {
    const { user } = useContext(AuthContext);
    const allItems = useLoaderData();
    // console.log(allItems)
    const [searchTitle, setSearchTitle] = useState("");

    const filteredItems = allItems.filter(item =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    return (
        <div>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>
            <PageTitle title="Lost n Found items | Track n Trace"></PageTitle>

            <div>
                <h2 className="text-2xl md:text-4xl font-bold mt-6 text-blue-700 text-center">All Lost and Found Items</h2>
                <div className="flex justify-center gap-4 my-4">
                    {/* Search Inputs */}
                    <input
                        type="text"
                        placeholder="Search by Title"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-10 min-h-[500px]">
                    {
                        filteredItems.map(item => <AllItemsCard item={item} user={user} key={item._id}></AllItemsCard>)
                    }
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default LostAndFoundItems;