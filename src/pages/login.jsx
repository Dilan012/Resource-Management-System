import { useNavigate, useSearchParams } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import axios from 'axios'
import { axiosInstance } from '../config/axios';
export function Login(){

    const navigate = useNavigate();

    const [data , setData] = useState({
        employee_id:"",
        password:""
    })

    const handlChange = (e)=>{
       const {name, value} = e.target
       console.log(data)

        setData({
            ...data, [name]:value
        })
    }

    const login = (username, password)=>{
        axiosInstance.post("/admin/login",{
            
                employee_id:username, 
                password:password
            
        })
        .then((response)=>{
            navigate('./dashbord/home')

            console.log(response)
        })
        .catch((error)=>{
            console.log(error)

        })
    }
    const onSubmit = (e)=>{
        e.preventDefault()

        login(data.employee_id, data.password)

    }
   
        
     

    return(
        <div className='login-main'>
            <div className='nav-bar-login'>
                <h1>Admin Portal</h1>
               <div className='nav-items'>
                    <span> <a href='https://parcelmanagement.netlify.app/'>Station</a></span>
                    <span><a>Help</a></span>
                </div>
            </div>
            <div className="login-container">
                
                <div> 
                    <h1 className='login-header'>Log into Account</h1>
                             
                    <div className="login-form">   
                        <form>
                            <label htmlFor='username'>Username</label><br/>
                            <input type="text" id="employee_id" onChange={handlChange} name="employee_id" value={data.username}></input><br/>
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" id="password" name='password' onChange={handlChange} value={data.password}></input><br/>
                            <input type="submit" onClick={onSubmit} value="Login"/>
                        </form>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}