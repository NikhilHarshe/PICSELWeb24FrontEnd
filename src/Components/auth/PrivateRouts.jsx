import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRouts({children}) {
    const {token} = useSelector((state) => state.auth)

    if(token != null)
        return children;
    else 
        return <Navigate to={"/login"} />
} 

export  default PrivateRouts