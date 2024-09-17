import { useState } from 'react'
import './registeremployee.css'
import axios from 'axios'
import img from '../../images/team.png'
import { Link } from 'react-router-dom';

export const cities = [
    'Colombo',
    'Kandy',
    'Galle',
    'Jaffna',
    'Negombo',
    'Anuradhapura',
    'Trincomalee',
    'Batticaloa',
    'Matara',
    'Kurunegala',
    'Puttalam',  
    'Vavuniya',  
    'Polonnaruwa',  
    'Kilinochchi',  
    'Mannar',  
    'Vavuniya',  
    'Mullaitivu',  
  ];

export function RegisterEmployee(){
    
    
    const [submitted , setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)
    

    const validate =async function ({employee_id, fname, lname, station, role}){
        let a = {}
        if(typeof fname !== 'string'){
           a = {...a, fname:'Invalid Username'}
        }
        const roles = ["station_master","general_staff"]
        if(!roles.includes(role)){
           a = {...a,role:"invalid user role"}
        }
    
        if (fname.length < 3 || fname.length > 20) {
            a = {...a, fname:"invalid username, too short or too long"}
          }
        
          if(typeof lname !== 'string'){
            a = {...a, lname:"Invalid Username"}
        }
    
        if (lname.length < 3 || lname.length > 20) {
           a =  {...a, lname:"invalid username, too short or too long"}
          }
    
        if(!(/^\d{5}$/.test(employee_id))){
            a = {...a, employee_id:"invalid employee number"}
        }
       

    
        if(!cities.includes(station)){
            a = {...a, station:"invalid station"}
        }

        setError(a)
    }
   
      
        const [formData, setFormData] = useState({
            fname:"",
            lname:"",
            employee_id:"",
            station:"",
            role:"general_staff",
           
            
    })
    const [error , setError]=useState({ })

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]:value
        })
        setError({...error, [name]:null})
    }

    const reset_err =(e)=>{
        
        setError({})
        setFormData({
            fname:"",
            lname:"",
            employee_id:"",
            station:"",
            role:"general_staff",
            
    })

    }

    const onSubmitted = async (e)=>{
        e.preventDefault()
        await validate(formData);

        if(Object.values(error).every(value=> value===null)){
            setSubmitted(true)
            register(formData); 

        }


    }

    const register = async function(formData){
         axios.post('/admin/createuser',formData)
        .then((response)=>{
            console.log(response)
            setSubmitted(false)
            setSuccess(true)
            setFormData({
                fname:"",
                lname:"",
                employee_id:"",
                station:"",
                role:"general_staff",
              
        })      
        })
        .catch((err)=>{
            console.log(err.response.status)
            setSubmitted(false)
        })

        
    }

    return(
        <div className='emp-reg-container'>
              <div className='content-white'>
                <h2>Employee</h2>
                <div>
                <Link to='https://parcelmanagement.netlify.app/'><button>test User </button></Link>
                <Link to='../employee'><button>Find Employee</button></Link>
                </div>
           
                <form>
                        <div className='form-group'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' pattern="[A-Za-z]*" id='fname' onChange={handleChange} value={formData.fname} name='fname' placeholder='e.g. Jhon'></input>

                        </div>
                        {error.fname ? <span className="error">* {error.fname} </span>: ""}

                        <div className='form-group'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='text' pattern="[A-Za-z]*" id='lname' name='lname' onChange={handleChange} value={formData.lname} placeholder='e.g. cena'></input>
                        </div>
                        {error.lname ? <span className="error">* {error.lname} </span>: ""}

                    <div className='form-group'>
                        <label htmlFor='emp_num'> Employee ID</label>
                        <input type='number'  id='emp_num' onChange={handleChange} value={formData.employee_id} name='employee_id' placeholder='e.g. 12345'></input>
                    </div>
                    {error.employee_id ? <span className="error">* {error.employee_id} </span>: ""}

                    <div className='form-group'>
                        <label htmlFor='station'>Station</label>
                        <select id='station' onChange={handleChange} value={formData.station} name='station'> 
                            <option value={null}></option>
                            {cities.map((city, index)=>{
                            return(  <option value={city} id={index}>{city}</option>)
                            })}
                        </select>
                    </div>
                    {error.station ? <span className="error">* {error.station} </span>: ""}

                    <div className='form-group'>
                        <label htmlFor='role'>Role</label>
                        <select id='role' name='role' onChange={handleChange} value={formData.role}>
                            <option value='general_staff'>general_staff</option>
                            <option value='station_master'>station_master</option>
                        </select>
                    </div>
                

                    <div className='submit-button'>
                        <button type='reset' onClick={reset_err} className='reset'>Clear</button>
                        <input type='submit' value={submitted ? "Submitting...":"Submit"} disabled={submitted} onClick={onSubmitted}></input>
                    </div> 
                
                </form>
               <div>
                {success ?
                <h1 style={{color:"#22a32f", fontSize:"1rem", padding:"0", margin:"0"}}>User has been registerd successfully</h1> 
                : ""}
               </div>
            </div>
          </div>

                    
    )



    
}
