import { SearchBarEmp } from "../../components/SearchBarEmp"
import './employee.css'
import emp from '../../images/emp.png'
import emp2 from '../../images/emp2.png'
import empty from '../../images/empty.png'
import add from '../../images/add.png'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, resolvePath } from "react-router-dom"
import { cities } from "./RegisterEmployee"

export function Employees(){

    const [fetchComplete, setFetchComplete] = useState(false);
    const [errorFetching, setErrorFetching] = useState(false);
    const [data1, setData] = useState(null)
    const [station, setStation] = useState(null)
    const [role, setRole] = useState(null)

    const fetchData = (role, station)=>{

        axios.get('/admin/employees',{
            params:{ role:role,station:station}
        })
        .then((response)=>{
            console.log(response.data)
            if(!response.data.Error){
                setData(response.data)
                setFetchComplete(true)
            }else{
                setData(null)
                
            }
        })
        .catch((error)=>{
            console.log(error)
            setErrorFetching(true)
        })
    }

    const onStationChange = (e)=>{
        setStation(e.target.value)
        
    }
    const onRoleChange = (e)=>{
        setRole(e.target.value);
    }

    useEffect(()=>{
         fetchData(role, station);
    },[role, station])

    const station_masters = 5
    const general_staff = 9
   const Role = ['general_staff', 'station_master']
    
    return(
        <div className="emp-main-container">
            <h3>Staff Center</h3>
            <div className="headbar-emp">
            <div className="search-bar">
                <SearchBarEmp/>
            </div>

            <div className="emp-option-container">
                    <div>
                        <ul>
                            <h4>Station</h4>
                            <li><select onChange={onStationChange}>
                            <option value="">All</option>
                                {cities.map((value, index)=>{
                                    return(<option value={value}>{value}</option>)
                                })}
                            </select></li>
                            <h4>Role</h4>
                            <li>
                                <select onChange={onRoleChange}>
                                    <option value="">All</option>
                                    {Role.map((value, index)=>{return(<option value={value}>{value}</option>)})}
                                </select>
                            </li>
                        </ul>

                        </div>
                        <div>
                            <Link to='../registeremp' className="add-Link1"><button><img src={add}/>Add New</button></Link>
                        </div>
                    
                      {  /*<div className="emp-count-container">
                            <div>
                                <img src={emp}/>
                                <span>Station Masters{' : '+station_masters}</span>
                            </div>
                            <div>
                                <img src={emp2}/>
                                <span>General Staff{" : "+station_masters}</span>
                            </div>
                            </div>*/}
                    </div>
                </div>
            
        {fetchComplete ?  
                data1 ? 
            
            <div className="base-container-emp">
                
                
                <div className="table-container-emp">
            
            
                    <table>
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Employee ID</th>
                                <th>Station</th>
                                <th>Role</th>
                                <th>Created by</th>
                                <th>Join</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    { 
                           data1 && data1.map((value, index)=>{
                                return(
                                    <tr>
                                        <td className="bold-text">{value.first_name.concat(" ",value.last_name)}</td>
                                        <td>{value.employee_id}</td>
                                        <td>{value.station}</td>
                                        <td className="roles" ><div className={value.role==="station_master" ? "station-master":
                                                                                value.role==="general_staff" ? "general-staff":""}  >
                                                                                    {value.role==="station_master" ? "Station Master":
                                                                                value.role==="general_staff" ? "General Staff": value.role}
                                                                                    
                                                                                    </div></td>
                                        <td>{value.created_by}</td>
                                        <td>{value.created_at}</td>
                                        <td><select>
                                                <option>Block</option>
                                                <option>ublock</option>
                                            </select></td>
                                    </tr>
                                )
                            })
                        }
                    </table> 
                </div>
 
            </div> : 

            <EmptyData/> :
            
            errorFetching ? <Error/> :
            <Loading/> 
            }
        </div>
    )}



function Loading(){
    return(
        <div>
            <h1>
                loading... 
            </h1>
        </div>
    )
}

function Error(){
    return(
        <div>
            <h1>Error Getting Data</h1>
        </div>
    )
}

function EmptyData(){
    return(
        <div style={{display:"flex"
                    ,alignItems:"center"
                    ,justifyContent:"center"
                    ,gap:"2rem"
                    ,width:"100%",
                    marginTop:"10rem"}}>
            <img src={empty} style={{width:"10rem"}}/>
            <div>
            <span style={{
                fontWeight:"600",
                fontFamily:"arial",
                fontSize:"1.5rem"
            }}
            >Sad no result...</span><br/>
            <span>There are no Users associated with the Criteria</span>
            </div>
        </div>
    )
}