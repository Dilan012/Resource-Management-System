import './addDevice.css'
import device from '../../images/device_ai.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export function AddDevice(){
    const [success, setSuccess] = useState(true)
    const [formData , setFormData] = useState({
        mac_id:null,
        iccid:null,
        status:null
    })

    const onChange = (event) => {
        
        const {name , value} = event.target;
        setFormData({
            ...formData, [name]:value
        })
        console.log(formData)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        

    }
    return(
        <div className="add-device">
            <div>
                <div className='header'>
                    <span>Device Installation</span>
                    <div>
                        <Link to='../devices' className='link-tag'><span>All Devices</span></Link>
                        <Link to='../devices' className='link-tag'><span>Locate</span></Link>
                    </div>
                </div>
              
                <div className='form-container'>
                    <img src={device}></img>
                    <form>
                        <div className="form-group">
                            <label htmlFor="mac_id">MAC ID</label>
                            <input onChange={onChange} name="MAC_ID" id="mac_id" placeholder="e.g. 00:1B:44:11:3A:B7"></input>
                            <span className='error-text'></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="iccid" > ICCID (SIM ID)</label>
                            <input onChange={onChange} name="ICCID" id="iccid" placeholder="e.g. 8914800000000000000"></input>
                            <span className='error-text'></span>
                        </div> 
                        <div className='form-group'>
                            <label htmlFor='status'>Status</label>
                            <select onChange={onChange} name='status'>
                                <option value='in_use'>Ready to Use</option>
                                <option value='not_in_use'>Disabled</option>
                            </select>
                        </div>
                        <div className="submit-group"> 
                            <input type="reset" value="Clear"></input>
                            <input type="submit" value="Add"></input>
                        </div>
                    </form>
                </div>
                <div className={success ? "success-message": "success-message invisible"}>
                    <span>Device Added Successfully !</span>
                </div>
                <div >
                    <LastDevice/>
                </div>
            </div>
        </div>
    )
}


function LastDevice(){
    return(
        <div className='last-device'>
            <h1>
                Last Added Device :
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>MAC</th>
                        <th>ICCID</th>
                        <th>Installation</th>
                        <th>Installed by</th>
                       
                        <th></th>
                    </tr>
                </thead>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                   
                </tr>
            </table>
        </div>
    )
}