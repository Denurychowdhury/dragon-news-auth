import { Children, useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }

    return (
        <Navigate to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoute;