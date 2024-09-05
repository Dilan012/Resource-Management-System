import { useState } from 'react'
import './registeremployee.css'
export function RegisterEmployee(){

    const [submitted , setSubmitted] = useState(false)

    const cities = ["Colombo","homagama", "kottawa" ]
    const [formData, setFormData] = useState({
            fname:"",
            lname:"",
            employee_id:"",
            station:"Colombo",
            role:"general_staff",
            requested_by:""
    })

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]:value
        })
        console.log(formData)
    }

    const onSubmitted = (e)=>{
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            alert('Form submitted!');
            setSubmitted(false); // Re-enable button if needed
          }, 2000); // Simulate a delay
    }

    const register = async function(formData){
        
    }

    return(
          <div className='emp-reg-container'>
            <h1>{formData.fname}</h1>
            <form>
                    <div className='form-group'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' id='fname' onChange={handleChange} value={formData.fname} name='fname' placeholder='First Name'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' id='lname' name='lname' onChange={handleChange} value={formData.lname} placeholder='Last Name'></input>
                    </div>
                <div className='form-group'>
                    <label htmlFor='emp_num'> Employee Number</label>
                    <input type='text' id='emp_num' onChange={handleChange} value={formData.emp_num} name='emp_num' placeholder='Employee Number'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='station'>Station</label>
                    <select id='station' onChange={handleChange} value={formData.station} name='station'> 
                        {cities.map((city, index)=>{
                          return(  <option value={city} id={index}>{city}</option>)
                        })}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='role'>Role</label>
                    <select id='role' name='role' onChange={handleChange} value={formData.role}>
                        <option value='general_staff'>general_staff</option>
                        <option value='station_master'>station_master</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='request'>Requested by</label>
                    <input type='text' id='request' name='request' value={formData.requested_by} onChange={handleChange} ></input>
                </div> 
                <div className='submit-button'>
                    <button type='reset' >Clear</button>
                    <input type='submit' value="Submit" disabled={submitted} onSubmit={onSubmitted}></input>
                </div>              
            </form>
          </div>

                    
    )
}