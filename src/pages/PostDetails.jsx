import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import DatePicker from "react-datepicker";
import PageTitle from "../components/PageTitle";

const PostDetails = () => {
    const { user } = useContext(AuthContext);
    const postData = useLoaderData();
    const [recoveryDate, setRecoveryDate] = useState(new Date());
    const { _id, thumbnail, title, location, category, postType, description, formattedDate, contactDisplayName, status, contactEmail } = postData;

    const loggedInUser = { name: user?.displayName, email: user?.email, image: user?.photoURL };

    const handleRecovery = () => {
        if (status === "recovered") {
            Swal.fire("Error", "This item is already recovered.", "error");
            return;
        }

        Swal.fire({
            title: "Recovery Form",
            html: `
                <label>Recovered Location:</label>
                <input id="recovered-location" class="swal2-input" placeholder="Enter location">
                <label>Recovered Date:</label>
                <div id="recovered-date-picker">
                ${recoveryDate}</div>
                <label>Recovered By:</label>
                <input id="recovered-by-name" class="swal2-input" value="${loggedInUser.name}" readonly>
                <input id="recovered-by-email" class="swal2-input" value="${loggedInUser.email}" readonly>
            `,
            didOpen: () => {
                ReactDOM.render(
                    <DatePicker
                        selected={recoveryDate}
                        onChange={(date) => setRecoveryDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />,
                    document.getElementById("recovered-date-picker")
                );
            },
            showCancelButton: true,
            confirmButtonText: "Submit",
            preConfirm: () => {
                const recoveredLocation = document.getElementById("recovered-location").value;
                if (!recoveredLocation) {
                    Swal.showValidationMessage("Please fill in all fields.");
                    return null;
                }
                return { recoveredLocation, recoveryDate };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const recoveryInfo = {
                    ...result.value,
                    recoveredBy: loggedInUser,
                };

                // Send data to the backend
                try {
                    const response = await fetch(`https://track-n-trace-server.vercel.app/recover-item/${_id}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(recoveryInfo),
                    });

                    if (response.ok) {
                        Swal.fire("Success", "Item marked as recovered!", "success");
                    } else {
                        const errorData = await response.json();
                        Swal.fire("Error", errorData.error || "Failed to recover the item.", "error");
                    }
                } catch (error) {
                    Swal.fire("Error", "Something went wrong. Please try again.", "error");
                }
            }
        });
    };

    return (
        <div>
            <PageTitle title="Details | Track n Trace"></PageTitle>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>
            <section className="min-h-dvh flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="card card-compact bg-base-200 my-10 border md:w-[600px] shadow-2xl">
                        <figure>
                            <img className="h-[335px] w-full"
                                src={thumbnail} />
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <h2 className="card-title">Title :  {title}</h2>
                                <h3 className="badge badge-neutral">{postType}</h3>
                            </div>
                            <div className="space-y-3">
                                <p><span className="text-lg font-bold">Description :</span>  {description}</p>
                                <p><span className="text-md font-bold">Location :</span>  {location}</p>
                                <p><span className="text-md font-bold">Date :</span>  {formattedDate}</p>
                                <p><span className="text-md font-bold">Item Category :</span>  {category}</p>
                                <ul><span className="text-md font-bold">Contact :</span>  <li>
                                    <span className="font-medium">Name -</span>  {contactDisplayName}</li>
                                    <li><span span className="font-medium">Email -</span>  {contactEmail}</li></ul>
                                <p><span className="text-md font-bold">Status :  </span>{status === "recovered" ? "recovered": "not recovered yet" }</p>
                            </div>
                            <div
                                onClick={handleRecovery}
                                className="card-actions">
                                <div className="flex justify-center my-2">
                                    {postType === "Lost" && (
                                        <Link>
                                            <button className="btn btn-primary btn-sm">Found This!</button>
                                        </Link>
                                    )}
                                    {postType === "Found" && (
                                        <Link>
                                            <button className="btn btn-primary btn-sm">This is Mine!</button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default PostDetails;