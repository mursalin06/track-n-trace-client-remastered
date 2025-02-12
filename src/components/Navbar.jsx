import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Logged out successfully.",
                    icon: "success"
                });
            })
            .catch((err) => {
                console.error(err, "Error while logging out");
                Swal.fire({
                    title: "Oops!",
                    text: "Failed to log out",
                    icon: "error"
                });
            });
    };

    return (
        <section className="relative overflow-visible">
            <div className="navbar bg-base-300 shadow-md px-6 rounded-lg w-full sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            <NavLink to="/" className="nav-link">
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/lost-and-found-items" className="nav-link">
                                <li>Lost and Found Items</li>
                            </NavLink>
                            <NavLink to="/add-items" className="nav-link">
                                <li>Add Item</li>
                            </NavLink>
                            {user && (
                                <>
                                    <NavLink to="/all-recovered-items" className="nav-link">
                                        <li>Recovered Items</li>
                                    </NavLink>
                                    <NavLink to="/manage-my-items" className="nav-link">
                                        <li>Manage My Items</li>
                                    </NavLink>
                                </>
                            )}
                        </ul>
                    </div>
                    <Link to="/" className="text-md md:text-xl font-bold text-blue-600 italic">
                        Track n Trace
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/" className="nav-link">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/lost-and-found-items" className="nav-link">
                            <li>Lost and Found Items</li>
                        </NavLink>
                        <NavLink to="/add-items" className="nav-link">
                            <li>Add Item</li>
                        </NavLink>
                        {user && (
                            <>
                                <NavLink to="/all-recovered-items" className="nav-link">
                                    <li>Recovered Items</li>
                                </NavLink>
                                <NavLink to="/manage-my-items" className="nav-link">
                                    <li>Manage My Items</li>
                                </NavLink>
                            </>
                        )}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end flex justify-center items-center gap-3 z-10">
                            <button onClick={handleLogOut} className="btn btn-error btn-sm text-white">
                                Log Out
                            </button>
                            <div>
                                <label tabIndex={0} className="flex items-center gap-2 cursor-pointer">
                                    <span className="tooltip tooltip-bottom z-50" data-tip={user.displayName}>
                                        <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="User Profile" />
                                    </span>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu pl-6 py-6 space-y-5 shadow bg-base-100 rounded-box w-56">
                                    <NavLink to="/all-recovered-items" className="nav-link">
                                        <li>All Recovered Items</li>
                                    </NavLink>
                                    <NavLink to="/manage-my-items" className="nav-link">
                                        <li>Manage My Items</li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="btn ml-3 btn-primary btn-sm px-6">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Navbar;
