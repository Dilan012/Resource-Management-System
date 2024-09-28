import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./authProvider"
import { useEffect, useState } from "react"
import { Loading } from "./components/loading"

export const PrivateRoute = ()=>{
    const [loading, setLoading] = useState(true)
    const {user, verify,verified ,setVerified} = useAuth()
    
    useEffect(()=>{
        setVerified(false)
        setLoading(true)
        const checkVerification = async () => {
            if (user) {
                setVerified(true);
                setLoading(false);
            } else {
                await verify(); 
            }
        };
        setTimeout(()=>{
            checkVerification(); // Call the async function
        },800)       
    },[user])

    if(loading){
        return(<Loading/>)
    }
    if(verified){
        return<Outlet/>
    }
    
    
}