import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const AllItemsCard = ({ item, user }) => {
    const {setLoading} = useContext(AuthContext)
    const navigate = useNavigate();
    const { _id, thumbnail, title, location, category, postType, status } = item;
    const handleViewDetails = () => {
        if (!user) {
            setLoading(true);
            navigate('/login', { replace: true });
            // setLoading(false);
            
        } else {
            navigate(`/item/${_id}`);
        }
    };
    return (
        <div className="flex justify-center items-center">
            <div className="card card-compact bg-base-200 border md:w-[400px] shadow-2xl">
                <figure>
                    <img className="h-[230px] w-full"
                        src={thumbnail} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title :  {title}</h2>
                    <div className="flex justify-between ">
                        <div>
                            <p>Location :  {location}</p>
                            <p>Item Category :  {category}</p>
                        </div>
                        <div>
                            <div className="badge badge-outline">{postType}</div>
                        </div>
                    </div>
                    <div className="card-actions items-center gap-20">
                        <button onClick={handleViewDetails} className="btn btn-primary btn-sm">
                            View Details
                        </button>
                        <p><span className="text-md font-bold">Status :  </span>{status === "recovered" ? "recovered" : "not recovered yet"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllItemsCard;