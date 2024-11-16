import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold mb-3">Log in with</h1>
            <div className="*:w-full space-y-2">
                <button className="btn"><FaGoogle />Log in with Google</button>
                <button className="btn"><FaGithub />Log in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;