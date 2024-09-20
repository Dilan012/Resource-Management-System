import './addDevice.css'
import device from '../../images/device_ai.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function AddDevice(){
    const [success, setSuccess] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [conflicterror, setConfilictError] = useState(null)
    const [lastDevice, setLastDevice] = useState()
    const [lastDeviceError, setLastDeviceError] = useState(null);
    const [localError, setLocalError] = useState({
        mac_id:null,
        iccid:null,
    })
    const [formData , setFormData] = useState({
        mac_id:"",
        iccid:"",
        status:"in_use"
    })

    const getLastDevice = ()=>{
        setLastDevice(null)
        axios.get('/admin/lastdevice')
        .then((respone)=>{
            if(respone.data){
                setLastDevice(respone.data[0])
                console.log(respone.data[0])
                console.log("comes here")
            }
        })
        .catch((err)=>{
            setLastDeviceError(err.response.data.Error)
        })
    }

    useEffect(()=>{

        setTimeout(()=>{
            getLastDevice()
        },1000)
    },[success])

    // validate user inputs
    const validate = async (data)=>{
        return new Promise((resolve)=>{

            const mac_reg = /^([A-Fa-f0-9]{2}[:]){5}([A-Fa-f0-9]{2})$/
            const iccid_reg = /^[0-9]{18,20}$/
            let err = {};
            if(!mac_reg.test(data.mac_id)){ 
                 err.mac_id = "invalid MAC ID" 
            }
            if(!iccid_reg.test(data.iccid)){
                 err.iccid = "Invalid ICCID"
            }
            setLocalError(err)
            resolve(err)
        })
    }

    // handle use input 
    const onChange = (event) => {
        
        const {name , value} = event.target
        setFormData({
            ...formData, [name]:value
        })
        setLocalError({
            ...localError, [name]:null
        })
        setSuccess(false)
        setConfilictError(null)
        
    }

    // send http request with data
    const sendData = (data)=>{
        axios.post('/admin/createdevice', data)
        .then((response)=>{
            console.log(response)
            setSuccess(true)
            setFormData({ 
            mac_id:"",
            iccid:"",
            status:"in_use"})
            setSubmitted(false)
        })
        .catch((err)=>{
            if(err.status == 409){
                setConfilictError(err.response.data.Error)
            }
            console.log(err)
            setSubmitted(false)
        })
    }
    
    // handle submit click
    const onSubmit = async (event)=>{
        event.preventDefault();
        setSubmitted(true)
        const err = await validate(formData)
        if(Object.values(err).every(value => value===null)){
            sendData(formData)
        }else{
            setSubmitted(false)
        }
    }

    const reset = ()=>{
       
        setFormData({ 
            mac_id:"",
            iccid:"",
            status:"in_use"})
        setSubmitted(false)
        setSuccess(false)
        setLocalError({})
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
                            <input onChange={onChange} value={formData.mac_id} name="mac_id" id="mac_id" placeholder="e.g. 00:1B:44:11:3A:B7"></input>
                            <span className={localError.mac_id ? 'error-text' : "error-text invisible"}>{localError.mac_id}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="iccid" > ICCID (SIM ID)</label>
                            <input onChange={onChange} value={formData.iccid} name="iccid" id="iccid" placeholder="e.g. 8914800000000000000"></input>
                            <span className={localError.iccid ? 'error-text' : 'error-text invisible'}>{localError.iccid}</span>
                        </div> 
                        <div className='form-group'>
                            <label htmlFor='status'>Status</label>
                            <select onChange={onChange} value={formData.status} name='status'>
                                <option value='in_use'>Ready to Use</option>
                                <option value='not_in_use'>Disabled</option>
                            </select>
                        </div>
                        <div className="submit-group"> 
                            <input type="reset" value="Clear" onClick={reset}></input>
                            <input type="submit" onClick={onSubmit} value={submitted ? "Installing..." : "add"}></input>
                        </div>
                        <div className={success ? "success-message": conflicterror ? "error-message" :"success-message invisible"}>
                            <span>{success ? "Device Added Successfully !" : conflicterror ? conflicterror : "no Error"}</span>
                        </div>
                    </form>
                </div>
                <div >
                    {
                        lastDevice ? <LastDevice lastDevice={lastDevice}/> 
                        : lastDeviceError ? <LoadError errorMessage={lastDeviceError}/> 
                        : <Loading/>
                    }
                </div>
            </div>
        </div>
    )
}


function LastDevice({lastDevice}){
   const {device_id, device_status, MAC_id, iccid, installation, installed_by} = lastDevice
    return(
        <div className='last-device'>
            
            <table>
                <caption>Last Added Device</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>MAC ID</th>
                        <th>ICCID</th>
                        <th>Installation</th>
                        <th>Installed by</th>
                       
                        
                    </tr>
                </thead>
                <tr>
                    <td>{device_id}</td>
                    <td>{device_status}</td>
                    <td>{MAC_id}</td>
                    <td>{iccid}</td>
                    <td>{installation}</td>
                    <td>{installed_by}</td>
                   
                </tr>
            </table>
        </div>
    )
}

const Loading = ()=>{
    return(
        <div>
             <div class="pulse-container">
                <div class="pulse"></div>
                <div class="pulse2"></div>
                <div class="pulse3"></div>
            </div>
        </div>
    )
}

export const LoadError = ({errorMessage})=>{
    return(
        <div className='load-error-last-device'>
            <span>{errorMessage}</span>
        </div>
    )
}