import DatePicker from "react-datepicker";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const UpdatePost = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const data = useLoaderData();
    const formattedDate = startDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    // console.log(data)

    const handleUpdateItems = (e) => {
        e.preventDefault();
        const form = e.target;

        const postType = form.type.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const contactDisplayName = form.contactName.value;
        const contactEmail = form.contactEmail.value;
        const updatedItem = { postType, thumbnail, title, description, category, location, formattedDate, contactDisplayName, contactEmail };
        // console.log(updatedItem)

        fetch(`https://track-n-trace-server.vercel.app/all-items/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItem),
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: "Hurrah!",
                    text: "Post Updated Successfully!",
                    icon: "success"
                  });
            } else {
                Swal.fire({
                    title: "Opps",
                    text: "Something went wrong!",
                    icon: "error"
                  });
            }
        });
    }
    return (
        <div>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>
            <section>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl my-10">
                        <h2 className="text-xl font-bold text-center md:text-2xl pt-4">Add Lost or Found Item</h2>
                        <form onSubmit={handleUpdateItems} className="card-body">
                            {/* POST TYPE */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post Type</span>
                                </label>
                                <select name="type" defaultValue={data.postType} className="select select-bordered w-full">
                                    <option disabled selected>Choose a category</option>
                                    <option>Lost</option>
                                    <option>Found</option>
                                </select>
                            </div>
                            {/* THUMBNAIL UPLOAD */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail</span>
                                </label>
                                {/* <input type="file" name="thumbnail" accept="image/*" className="file-input file-input-bordered w-full" /> */}
                                <input type="text" defaultValue={data.thumbnail} name="thumbnail" className="input input-bordered" required />
                            </div>
                            {/* TITLE */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" defaultValue={data.title} name="title" className="input input-bordered" required />
                            </div>
                            {/* DESCRIPTION */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" defaultValue={data.description} name="description" className="input input-bordered" required />
                            </div>
                            {/* CATEGORY */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" defaultValue={data.category} name="category" className="input input-bordered" required />
                            </div>
                            {/* LOCATION */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" defaultValue={data.location} name="location" className="input input-bordered" required />
                            </div>
                            {/* DATE */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                {/* <input type="date"  className="input input-bordered" required /> */}
                                <DatePicker
                                    className="input-bordered border rounded-lg py-3 pl-3  w-full"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                            </div>
                            {/* CONTACT INFORMATION */}
                            {/* (pre-filled with logged-in user details- displayName, email). */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact Information</span>
                                </label>
                                <input type="text" name="contactName" value={user?.displayName || ""} disabled className="input input-bordered" required />
                                <input
                                    type="email"
                                    value={user?.email || ''}
                                    disabled
                                    name="contactEmail"
                                    className="input input-bordered mt-2"
                                />
                            </div>
                            {/*  */}
                            <div className="form-control mt-6">
                                <button className="btn btn-success text-white">Update Post</button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdatePost;