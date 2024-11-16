import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";


const Register = () => {
    const { createNewUser, user, setUser, updateUserProfile } = useContext(Authcontext)
    const navigate = useNavigate()
    const handlesubmit = e => {
        e.preventDefault()
        // get from data
        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(name, email, photo, password);

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        navigate('/')
                    })
                // .catch(error => console.log(error))
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                // console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handlesubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Allready Have An Account ?
                    <Link className="text-red-400" to='/auth/login'>login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;