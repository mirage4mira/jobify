import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    const {user, userLoading} = useAppContext();
    
    if(userLoading) return <Loading/>;
    
    if(!user){
        return <Navigate to="/landing"/>
    }
    // return <div>There is no user.</div>
  return children;
}

export default ProtectedRoute