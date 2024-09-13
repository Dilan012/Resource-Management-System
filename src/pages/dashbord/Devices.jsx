import './devices.css'
import { SearchBarEmp } from "../../components/SearchBarEmp";
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Devices(){

    const [data, setData] = useState({})
    const [dataFetched, setDataFetched] = useState(false)
    const fetchData = ()=>{
            axios.get('/admin/alldevices')
            .then((response)=>{
                if(!response.data.Error){
                    setData(response.data)
                    setDataFetched(true)
                    console.log(response.data)
                }else{
                    setData(null)
                    console.log("nt runingss")
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    
    useEffect(()=>{
        fetchData()
    },[])


    return(
        <div className="devices">
            <div>
                <span>Device Manager</span>
                <SearchBarEmp/>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Device ID</th>
                            <th>Device Status</th>
                            <th>MAC ID</th>
                            <th>ICCID</th>
                            <th>Created BY</th>
                            <th>Created At</th>
                            <th>Last Location Update</th>
                        </tr>
                    </thead>
                    
                        {dataFetched ? data.map((value, index)=>{
                            return(
                            <tr>
                                <td>{value.device_id}</td>
                                {value.device_status === "in_use" ?
                                    <td><span className='in-use'>Working</span></td>
                                    : <td ><span className='not-in-use'>Disabled</span></td>
                                    }
                                
                                <td>{value.MAC_id}</td>
                                <td>{value.iccid}</td>
                                <td>{value.created_by}</td>
                                <td>{value.created_at}</td>
                                <td>{value.Last_update}</td>
                            </tr>)

                        }):""}
                   
                </table>

            </div>
        </div>
    )
}