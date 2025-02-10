import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import noData from "../../assets/no-data-concept-illustration_114.jpg";

const ManageMyItems = () => {
    const { user, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const postedItems = useLoaderData();
    const myPostedItems = postedItems.filter(item => item.contactEmail === user?.email);

    const [items, setItems] = useState(myPostedItems);
    // console.log(postedItems, myPostedItems)  


    const handleUpdate = (id) => {
        if (!user) {
            navigate('/login')
        }
    }
    const handleDelete = (_id) => {
        console.log('Deleting', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                fetch(`https://track-n-trace-server.vercel.app/all-items/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false);
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // const remaining = myPostedItems.filter((singleItem) => singleItem._id !== _id);
                            // setItems(remaining);
                            setItems(prevItems => prevItems.filter(item => item._id !== _id));

                        }
                    })
            }
        });
    }
    return (
        <div>
            <PageTitle title="Manage my items | Track n Trace"></PageTitle>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>

            <section >
                {
                    items.length !== 0 ? <div className="overflow-x-auto md:overflow-hidden rounded-lg w-full flex flex-col min-h-screen ">
                        <h2 className="text-2xl md:text-4xl font-bold mt-6 text-blue-700 text-center mb-10">My Items</h2>
                        <table className="table lg:ml-28">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Thumbnail and Title</th>
                                    <th>Post type</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    myPostedItems.map(postedItem => <tr key={postedItem._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask  h-12 w-12">
                                                        <img
                                                            src={postedItem.thumbnail}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{postedItem.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {postedItem.postType}
                                        </td>
                                        <td>{postedItem.category}</td>
                                        <th>
                                            <div className="flex gap-2">
                                                <Link to={`/updateItems/${postedItem._id}`}><button onClick={() => handleUpdate(postedItem._id)} className="btn text-white btn-success btn-sm">Update</button></Link>
                                                <Link><button onClick={() => handleDelete(postedItem._id)} className="btn text-white btn-error btn-sm ml-3">Delete</button></Link>
                                            </div>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div> : <div className="min-h-screen flex justify-center items-center">
                        <img src={noData} alt="" />
                    </div>
                }

            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ManageMyItems;