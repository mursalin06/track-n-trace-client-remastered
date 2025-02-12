import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import PageTitle from "../components/PageTitle";
import loginImg from "../../public/Computer login-amico.svg";

const Login = () => {
    const navigate = useNavigate();
    const { login, setUser, googleSignIn, setLoading } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setLoading(true);
        login(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                Swal.fire({
                    title: "Good job",
                    text: "You're logged in!",
                    icon: "success"
                });
                navigate(location.state?.from || "/");
            })
            .catch(error => {
                setLoading(false);
                console.error("Error while logging in:", error);
                Swal.fire({
                    title: "Oops!",
                    text: "Password or email is incorrect. Try again",
                    icon: "error"
                });
            })
            .finally(() => setLoading(false));
    };

    const handleGoogleSignIn = () => {
        setLoading(true);
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    title: "Good job",
                    text: "You're logged in!",
                    icon: "success"
                });
                navigate(location.state?.from || "/");
            })
            .catch(error => {
                setLoading(false);
                console.error("Error occurred while signing in with Google:", error);
                Swal.fire({
                    title: "Oops!",
                    text: "An error occurred. Try again.",
                    icon: "error"
                });
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-base-200 p-5">
            <PageTitle title="Login | Track n Trace" />

            {/* Form Container */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="card bg-base-100 w-full max-w-2xl shadow-sm md:shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>

                        {/* Register Link */}
                        <p className="text-center mt-2">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-green-600 underline font-bold">
                                Register
                            </Link>
                        </p>

                        {/* Login Button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {/* Divider & Google Sign-In */}
                    <div className="divider mx-10">OR</div>
                    <div className="flex justify-center">
                        <button onClick={handleGoogleSignIn} className="btn w-full max-w-[300px] mx-10 mb-5 flex items-center gap-2">
                            <span>Sign in with</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center p-5">
                <img src={loginImg} alt="Login Illustration" className="w-full max-w-md" />
            </div>
        </div>
    );
};

export default Login;
