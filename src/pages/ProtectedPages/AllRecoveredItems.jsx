import noData from "../../assets/no-data-concept-illustration_114.jpg";
import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";

const AllRecoveredItems = () => {
    const recoveredItems = useLoaderData();
    // console.log(recoveredItems)
    return (
        <div>
            <PageTitle title="All recovered items | Track n Trace"></PageTitle>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>
            <section>
                {recoveredItems.length > 0 ?<div className="overflow-x-auto md:overflow-hidden rounded-lg w-full flex flex-col min-h-screen ">
                    <h2 className="text-2xl md:text-4xl font-bold mt-6 text-blue-500 text-center mb-10">All recovered items</h2>
                    <table className="table lg:ml-28">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Recovered by</th>
                                <th>Recovery location</th>
                                <th>Recovery Date</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                recoveredItems.map(recoveredItem => <tr key={recoveredItem._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask  h-12 w-12">
                                                    <img
                                                        src={recoveredItem.recoveredBy?.image }
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{recoveredItem.recoveredBy.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {recoveredItem.recoveredLocation}
                                    </td>
                                    <td>{new Date(recoveredItem.recoveryDate).toLocaleString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric', 
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true
                                    })}</td>
                                    <td>{recoveredItem.recoveredBy.email}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>:
                <div className="min-h-screen flex justify-center items-center">
                    <img src={noData} alt="" />
                </div> }
                
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllRecoveredItems;