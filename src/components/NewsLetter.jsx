const NewsLetter = () => {
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="border border-blue-300 rounded-lg py-24 flex items-center flex-col md:w-1/2 space-x-5 space-y-3">
                <h2 className="text-2xl md:text-4xl font-bold text-blue-700">Join The Community</h2>
                <p className=" text-center">Hi there! Subscribe to our newspaper to stay updated.</p>
                <div className="join">
                    <input className="input input-bordered join-item md:pr-20" placeholder="Email" />
                    <button className="btn join-item md:px-10 btn-primary">I'M IN</button>
                </div>
                <p>We don't spam! pinky promise :)</p>
            </div>
        </div>
    );
};

export default NewsLetter;