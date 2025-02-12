import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";


const AddLostAndFoundItem = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate(); // Hook for navigation

    const formattedDate = startDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleAddItems = (e) => {
        e.preventDefault();

        if (!user) {
            // Redirect to login if user is not logged in
            Swal.fire({
                title: "Unauthorized!",
                text: "You must be logged in to add an item.",
                icon: "warning",
                confirmButtonText: "Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
            });
            return;
        }

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
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Item added successfully!",
                    icon: "success"
                });
                form.reset();
            })
            .catch(() => {
                Swal.fire({
                    title: "Oops!",
                    text: "Something went wrong!",
                    icon: "error"
                });
            });
    };

    return (
        <div>
            <PageTitle title="Add lost and found item | Track n Trace" />
            <nav className="sticky top-0 z-50">
                <Navbar />
            </nav>
            <section className="min-h-screen flex items-center justify-center">
                <div className="card bg-base-100 w-full max-w-2xl shadow-2xl my-10">
                    <h2 className="text-xl font-bold text-center md:text-2xl pt-4">Add Lost or Found Item</h2>
                    <form onSubmit={handleAddItems} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post Type</span>
                            </label>
                            <select name="type" className="select select-bordered w-full" required>
                                <option disabled selected>Choose a category</option>
                                <option>Lost</option>
                                <option>Found</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <DatePicker
                                className="input input-bordered w-full h-12 px-4 py-2 border border-gray-300 rounded-lg"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="MM/dd/yyyy"
                                placeholderText="Select a date"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Information</span>
                            </label>
                            <input type="text" name="contactName" value={user?.displayName || ""} disabled placeholder="Your Name" className="input input-bordered" required />
                            <input type="email" value={user?.email || ""} disabled name="contactEmail" className="input input-bordered mt-2" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Post</button>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AddLostAndFoundItem;
