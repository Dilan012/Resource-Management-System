import { createContext, useContext, useState } from "react";
import AxiosInterceptor, { axiosInstance } from "./config/axios";
import { Navigate, useNavigate } from "react-router-dom";



const AuthContext = createContext()

export const AuthProvder = ({children})=>{

    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const verify = ()=>{
        setTimeout(()=>{

            axiosInstance.get('/admin/verify')
            .then((response)=>{
                setUser(response.data)
                return true;
            })
            .catch((err)=>{
                navigate('/')
            })
        }, 500)
    }

    return(
        <AuthContext.Provider value={{user, setUser, verify}}>
            <AxiosInterceptor/>
            {children}
        </AuthContext.Provider>
    )

    
}

export const useAuth = () =>{  
    return(useContext(AuthContext))  
}