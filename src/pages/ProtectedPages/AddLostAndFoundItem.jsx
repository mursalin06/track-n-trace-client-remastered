import DatePicker from "react-datepicker";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";

const AddLostAndFoundItem = () => {

    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const formattedDate = startDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleAddItems = (e) => {
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
        const newItem = { postType, thumbnail, title, description, category, location, formattedDate, contactDisplayName, contactEmail };

        fetch('https://track-n-trace-server.vercel.app/all-items', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Good job!",
                    text: "Item added to the DB successfully!",
                    icon: "success"
                });
                form.reset();
            })
            .catch(err => {
                Swal.fire({
                    title: "Opps!",
                    text: "Something went wrong!",
                    icon: "error"
                });
            })
        // 

    };
    return (
        <div>
            <PageTitle title="Add lost and found item | Track n Trace"></PageTitle>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>
            <section className="min-h-screen flex items-center justify-center">
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl my-10">
                    <h2 className="text-xl font-bold text-center md:text-2xl pt-4">Add Lost or Found Item</h2>
                    <form onSubmit={handleAddItems} className="card-body">
                        {/* POST TYPE */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post Type</span>
                            </label>
                            <select name="type" className="select select-bordered w-full">
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
                            <input type="text" name="thumbnail" placeholder="thumbnail" className="input input-bordered" required />
                        </div>
                        {/* TITLE */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                        </div>
                        {/* DESCRIPTION */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                        </div>
                        {/* CATEGORY */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="category" className="input input-bordered" required />
                        </div>
                        {/* LOCATION */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                        </div>
                        {/* DATE */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            {/* <input type="date" placeholder="date" className="input input-bordered" required /> */}
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
                            <input type="text" name="contactName" value={user?.displayName || ""} disabled placeholder="contact information" className="input input-bordered" required />
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
                            <button className="btn btn-primary">Add Post</button>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddLostAndFoundItem;