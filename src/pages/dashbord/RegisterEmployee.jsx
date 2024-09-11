import { useState } from 'react'
import './registeremployee.css'
import axios from 'axios'

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
    

    const validate = function ({employee_id, fname, lname, station, role}){
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
            a = {...a, role:"invalid station"}
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
        validate(formData);

        if(Object.values(error).every(value=> value===null)){
            setSubmitted(true)
            console.log("Error set")
            register(formData);
            

        }

    }

    const register = async function(formData){
         axios.post('/admin/createuser',formData)
        .then((response)=>{
            console.log(response)
            setSubmitted(false)
            setFormData({
                fname:"",
                lname:"",
                employee_id:"",
                station:"",
                role:"general_staff",
              
        })      
        })
        .catch((err)=>{
            console.log(err.response)
            setSubmitted(false)
        })

        
    }

    return(
          <div className='emp-reg-container'>
            <form>
                    <div className='form-group'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' pattern="[A-Za-z]*" id='fname' onChange={handleChange} value={formData.fname} name='fname' placeholder='First Name'></input>

                    </div>
                    {error.fname ? <span className="error">* {error.fname} </span>:null}

                    <div className='form-group'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' pattern="[A-Za-z]*" id='lname' name='lname' onChange={handleChange} value={formData.lname} placeholder='Last Name'></input>
                    </div>
                    {error.lname ? <span className="error">* {error.lname} </span>: ""}

                <div className='form-group'>
                    <label htmlFor='emp_num'> Employee Number</label>
                    <input type='number'  id='emp_num' onChange={handleChange} value={formData.employee_id} name='employee_id' placeholder='Employee Number'></input>
                </div>
                {error.employee_id ? <span className="error">* {error.employee_id} </span>: ""}

                <div className='form-group'>
                    <label htmlFor='station'>Station</label>
                    <select id='station' onChange={handleChange} value={formData.station} name='station'> 
                        <option value=""></option>
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
                    <button type='reset' onClick={reset_err} >Clear</button>
                    <input type='submit' value={submitted ? "Submitting...":"Submit"} disabled={submitted} onClick={onSubmitted}></input>
                </div> 
             
            </form>
          </div>

                    
    )



    
}
