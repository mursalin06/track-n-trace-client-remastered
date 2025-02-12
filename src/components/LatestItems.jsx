import { useContext, useEffect, useState } from "react";
import { FaLocationArrow, FaMapLocation } from "react-icons/fa6";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LatestItems = () => {
    const {user, setLoading} = useContext(AuthContext)
    const [items, setItems] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        fetch('https://track-n-trace-server.vercel.app/all-items')
            .then(res => res.json())
            .then(data => {
                // Sort data by date (latest first)
                const sortedData = data.sort((a, b) => new Date(b.formattedDate) - new Date(a.formattedDate));
                // Get only the latest 3 items
                setItems(sortedData.slice(0, 3));
            });
    }, []);
    const handleViewDetailsBtn = (_id) => {
        if (!user) {
            setLoading(true);
            navigate('/login', { replace: true });
            setLoading(false);
            
        } else {
            navigate(`/item/${_id}`);
        }
    };
    return (
        <div className="md:h-[600px] border md:flex md:justify-center my-12 md:flex-col">
            <h3 className="text-2xl md:text-4xl font-semibold text-blue-500 text-center" >Latest Items</h3>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    {
                        items.map(item => <div className="flex justify-center items-center">
                            <div className="card card-compact bg-base-200 border md:w-[400px] shadow-2xl">
                                <figure>
                                    <img className="h-[240px] w-11/12 rounded-lg mt-3"
                                        src={item.thumbnail} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <div className="flex justify-between ">
                                        <div>
                                            <p className="flex items-center gap-2"><FaMapLocation></FaMapLocation>  {item.location}</p>
                                            <p>Item Category :  {item.category}</p>
                                        </div>
                                        <div>
                                            <div className="badge badge-primary badge-outline">{item.postType}</div>
                                        </div>
                                    </div>
                                    <div className="card-actions items-center gap-20">
                                        <button onClick={()=>handleViewDetailsBtn(item._id)} className="btn btn-primary btn-sm">
                                            View Details
                                        </button>
                                        {/* <p><span className="text-md font-bold">Status :  </span>{status === "recovered" ? "recovered" : "not recovered yet"}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </section>
        </div>
    );
};

export default LatestItems;