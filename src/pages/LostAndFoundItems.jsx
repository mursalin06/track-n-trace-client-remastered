import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const LostAndFoundItems = () => {
    const { user, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const allItems = useLoaderData();
    const [searchTitle, setSearchTitle] = useState("");
    const [sortNewest, setSortNewest] = useState(true);

    // Filter items based on search title
    const filteredItems = allItems.filter(item =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    // Sort items based on formattedDate
    const sortedItems = [...filteredItems].sort((a, b) => {
        return sortNewest
            ? new Date(b.formattedDate) - new Date(a.formattedDate)
            : new Date(a.formattedDate) - new Date(b.formattedDate);
    });

    const handleViewDetails = (_id) => {
        if (!user) {
            setLoading(true);
            navigate('/login', { replace: true });
        } else {
            navigate(`/item/${_id}`);
        }
    };

    return (
        <div>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>
            <PageTitle title="Lost n Found items | Track n Trace"></PageTitle>

            <div>
                <h2 className="text-2xl md:text-4xl font-bold mt-6 text-blue-500 text-center">
                    All Lost and Found Items
                </h2>
                <div className="flex justify-center gap-4 my-4">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by Title"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {/* Sort Button */}
                    <button
                        onClick={() => setSortNewest(!sortNewest)}
                        className="btn btn-primary"
                    >
                        {sortNewest ? "Oldest First" : "Newest First"}
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-10 min-h-[500px]">
                    {sortedItems.map(item => (
                        <div className="flex justify-center items-center" key={item._id}>
                            <div className="card card-compact bg-base-200 border md:w-[400px] shadow-2xl">
                                <figure>
                                    <img className="h-[230px] w-full" src={item.thumbnail} alt={item.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <div className="flex justify-between">
                                        <div>
                                            <p>Location: {item.location}</p>
                                            <p>Item Category: {item.category}</p>
                                            <p>Date: {item.formattedDate}</p>
                                        </div>
                                        <div>
                                            <div className="badge badge-outline">{item.postType}</div>
                                        </div>
                                    </div>
                                    <div className="card-actions items-center gap-20">
                                        <button
                                            onClick={() => handleViewDetails(item._id)}
                                            className="btn btn-primary btn-sm"
                                        >
                                            View Details
                                        </button>
                                        <p>
                                            <span className="text-md font-bold">Status: </span>
                                            {item.status === "recovered" ? "Recovered" : "Not recovered yet"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default LostAndFoundItems;