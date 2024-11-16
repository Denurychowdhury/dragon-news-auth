import { Link, NavLink } from "react-router-dom";
import usericon from '../assets/user.png'
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(Authcontext)
    return (
        <div className="flex justify-between">
            <div>{user && user.email}</div>
            <div className="nav space-x-2">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/'>to home</NavLink>
            </div>
            <div className="login">
                <div className="flex items-center gap-3">
                    {
                        user && user?.email ? <div>
                            <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div> : <div><img src={usericon} alt="" /></div>
                    }
                    {
                        user && user.email ? <button onClick={logout} className="btn btn-neutral rounded-none">Logout</button> : (<Link to='/auth/login'><button className="btn btn-neutral rounded-none">login</button></Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;