import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import registerImg from "./../../public/Sign up-rafiki.svg";
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
        if (!passwordRegex.test(password)) {
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

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                });
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
                console.log(err);
            });
    };

    return (
        <div>
            <PageTitle title="Register | Track n Trace" />
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-base-200 p-5">
                {/* Left Side: Form */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="card bg-base-100 w-full max-w-2xl shadow-2xl p-6">
                        <h2 className="text-2xl font-bold text-center">Register</h2>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter your name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <p className="text-center">Already have an account? <Link to='/login' className="text-blue-600 font-bold underline">Login</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-success text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                    <img src={registerImg} alt="Register" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Register;