import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";


const FIndUs = () => {
    return (
        <div>
            <h1 className="font-semibold">Find Us On</h1>
            <div className="*:w-full space-y-2">
                <div className="join join-vertical *:bg-base-100">
                    <button className="btn join-item justify-start"><CiFacebook />Facebook</button>
                    <button className="btn join-item justify-start">
                        <FaTwitter></FaTwitter> Twitter
                    </button>
                    <button className="btn join-item justify-start">
                        <FaInstagram></FaInstagram> Instragram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FIndUs;