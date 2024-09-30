import { useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import { axiosInstance } from '../config/axios';
import { useAuth } from '../authProvider';
import logo from '../images/logo.png'
export function Login(){

    const {setUser} = useAuth()
    const navigate = useNavigate();
    const [submit_clicked, setSubmit_Clicked] = useState(false)
    const [localError, setLocalError] = useState(null)
    const [data , setData] = useState({
        employee_id:"",
        password:""
    })

    const handlChange = (e)=>{
       const {name, value} = e.target
        setLocalError(null)
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
            setSubmit_Clicked(false)
            setUser(response.data.user)
            navigate('/dashbord')
            
        })
        .catch((error)=>{
            setSubmit_Clicked(false)
            setLocalError(error.response.data)
            setUser(null)

        })
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        setSubmit_Clicked(true)
        login(data.employee_id, data.password)

    }
   
    
        
     

    return(
        <div className='login-main'>
            <div className='nav-bar-login'>
                <img src={logo}/>
                <h1>Rail Express</h1>
               <div className='nav-items'>
                    <span> <a href='https://railexpress.netlify.app/'>Station</a></span>
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
                            <span className={localError ? 'error-login' : "hide"}>{localError ? localError.Error : ""}</span>
                            <input type="submit" deactivate onClick={onSubmit} value={submit_clicked ? "Logging..." :"Login"}/>
                        </form>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}