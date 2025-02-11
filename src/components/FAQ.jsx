const FAQ = () => {
    return (
        <section className="flex justify-center items-center flex-col py-6 md:h-[600px]">
            <h2 className="text-2xl md:text-4xl font-semibold pb-6 md:pb-10 text-center text-blue-500">Frequently Asked Questions</h2>
            <div className="join join-vertical w-full mx-10 md:w-1/2 md:mx-auto border border-blue-300">
                <div className="collapse collapse-arrow join-item border-base-300 border ">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium ">How do I post a lost or found item on Track n Trace?</div>
                    <div className="collapse-content text-stone-700">
                        <p>To post a lost or found item:</p>
                        <ul>
                            <li>1. Create an account or log in to your existing account.</li>
                            <li>2. Navigate to the "Add lost and found Item" section.
                            </li>
                            <li>3. Fill out the form with details like item description, category, location, and upload a photo if available.
                            </li>
                            <li>4. Submit the form, and your listing will appear on the site for others to view.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium"> Is it free to use Track n Trace?</div>
                    <div className="collapse-content text-stone-700">
                        <p>Yes, Track n Trace is completely free to use! You can post, search, and connect with others regarding lost and found items without any charges.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What should I do after finding or recovering my item?</div>
                    <div className="collapse-content text-stone-700">
                        <p>Once you’ve found or recovered your item:</p>
                        <ul>
                            <li>1. Log in to your Track n Trace account.
                            </li>
                            <li>2. Go to your posted listing.
                            </li>
                            <li>3. Mark it as "Resolved" to inform others that the issue has been resolved.
                            This helps keep the platform up-to-date and avoids unnecessary inquiries.</li>
                        </ul>
                    </div>
                </div>
                {/*  */}
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium"> Can I edit or delete my listing?</div>
                    <div className="collapse-content text-stone-700">
                        <p>Yes, you can edit or delete your listing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;