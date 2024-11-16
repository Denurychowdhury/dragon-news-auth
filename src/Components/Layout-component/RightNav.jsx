import FIndUs from "../FIndUs";
import SocialLogin from "../SocialLogin";
import Zone from "../Zone";


const RightNav = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FIndUs></FIndUs>
            <Zone></Zone>
        </div>
    );
};

export default RightNav;