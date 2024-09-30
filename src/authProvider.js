import { createContext, useContext, useState } from "react";
import AxiosInterceptor, { axiosInstance } from "./config/axios";
import { Navigate, useNavigate } from "react-router-dom";



const AuthContext = createContext()

export const AuthProvder = ({children})=>{
    const [verified ,setVerified] = useState(false)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const verify = ()=>{
        setTimeout(()=>{

            axiosInstance.get('/admin/verify')
            .then((response)=>{
                setUser(response.data)
                setVerified(true);
                return true;
            })
            .catch((err)=>{
                navigate('/')
            })
        }, 500)
    }

    const logout = ()=>{
        axiosInstance.get('/staff/logout')
        .then((response)=>{
            console.log(response.data)
            navigate('/')
            setUser(null)
        })
        .catch((err)=>{
            setUser(null)
            navigate('/')
        })
    
    }
    return(
        <AuthContext.Provider value={{user, setUser, verify, verified, setVerified, logout}}>
            <AxiosInterceptor/>
            {children}
        </AuthContext.Provider>
    )

    
}

export const useAuth = () =>{  
    return(useContext(AuthContext))  
}