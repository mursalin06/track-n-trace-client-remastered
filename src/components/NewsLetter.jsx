import Swal from "sweetalert2";

const NewsLetter = () => {
    const handleImIn = (e) =>{
        e.preventDefault();
        Swal.fire({
            title: "Good job!",
            text: "You're In!",
            icon: "success"
          });
          form.reset();
    }
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="border border-blue-300 rounded-lg py-24 flex items-center flex-col md:w-1/2 space-x-5 space-y-3">
                <h2 className="text-2xl md:text-4xl font-semibold text-blue-500">Join The Community</h2>
                <p className=" text-center">Hi there! Subscribe to our newspaper to stay updated.</p>
                <form onSubmit={handleImIn} className="join max-w-fit flex justify-center">
                    <input className="input input-bordered join-item md:pr-20" required placeholder="Email" />
                    <button className="btn join-item md:px-10 bg-blue-500 mr-5 text-white">I'M IN</button>
                </form>
                <p>We don't spam! pinky promise :)</p>
            </div>
        </div>
    );
};

export default NewsLetter;