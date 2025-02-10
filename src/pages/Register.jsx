import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import PageTitle from "../components/PageTitle";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser } = useContext(AuthContext);


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        // pass validation
        if (!passwordRegex.test(password)) {
            // toast.error
            toast.error("Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }
        // console.log(userInfo);

        // Create user in firebase
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                // console.log(user)
                // update users name and photo
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                })
                if (user) {
                    Swal.fire({
                        title: "Great job!",
                        text: "User created successfully!",
                        icon: "success"
                    });
                }
                navigate('/');
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <PageTitle title="Register | Track n Trace"></PageTitle>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full mx-5 md:w-10/12 my-6 lg:w-1/3 shadow-2xl">
                    <h2 className="text-2xl font-bold text-center pt-6">Register</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        {/* NAME */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        {/* EMAIL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        {/* PHOTO URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                        </div>
                        {/* PASSWORD */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <p>Already have an account ? <Link to='/login'><span className="text-blue-600 font-bold underline">Login</span></Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;