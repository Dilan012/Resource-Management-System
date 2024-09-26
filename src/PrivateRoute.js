import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./authProvider"
import { useEffect, useState } from "react"
import { Loading } from "./components/loading"

export const PrivateRoute = ()=>{
    const [verified ,setVerified] = useState(false)
    const [loading, setLoading] = useState(true)
    const {user, verify} = useAuth()
    useEffect(()=>{
      
        const checkVerification = async () => {
            if (user) {
                setVerified(true);
                setLoading(false);
            } else {
                await verify(); 
            }
        };
                    
        checkVerification(); // Call the async function
    },[user])

    if(loading){
        return(<Loading/>   )
    }
    if(verified){
        return<Outlet/>
    }
    
    
}