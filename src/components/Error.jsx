import { Link } from "react-router-dom";
import errorImage from "../assets/error-404-concept-design-landing.jpg";
const Error = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <img src={errorImage} alt="" />
            <Link to='/'><button className="btn btn-neutral ">Go back home</button></Link>
        </div>
    );
};

export default Error;