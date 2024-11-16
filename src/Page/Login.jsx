import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";


const Login = () => {
    const { setUser, userLogin } = useContext(Authcontext)
    const handlesubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                alert(error.code)
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handlesubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont’t Have An Account ?
                    <Link className="text-red-400" to='/auth/register'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;