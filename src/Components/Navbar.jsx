import { Link, NavLink } from "react-router-dom";
import usericon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="nav space-x-2">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="login">
                <div className="flex items-center gap-3">
                    <img src={usericon} alt="" />
                    <Link to='/auth/login'><button className="btn btn-neutral rounded-none">login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;