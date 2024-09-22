import './devices.css'
import add from '../../images/add.png'
import { SearchBarEmp } from "../../components/SearchBarEmp";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../../components/loading';
import { EmptyData } from './Employees';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config/axios';

export function Devices(){

    const [data, setData] = useState({})
    const [dataFetched, setDataFetched] = useState(false)
    const [filter, setFilter] = useState({})
    const [searchTerm, setSearchTerm] = useState({})
    const [error ,setError] = useState(null)

    const fetchData = ()=>{
        axiosInstance.get('/admin/alldevices',{
                params:{status:filter, search_term:searchTerm}
            })
            .then((response)=>{
                if(!response.data.Error){
                    setData(response.data)
                    setDataFetched(true)
                    setError(null)
                    console.log(response.data)
                }else{
                    setData(null)
                    setDataFetched(true)
                    setError(null)
                }
            })
            .catch((error)=>{
                console.log(error.response)
                setData(null)
                setDataFetched(true)
                setError(error)
            })
        }
    
    useEffect(()=>{
        setTimeout(()=>{
            fetchData()
        },500)
    },[filter,searchTerm])

    const filterOnchange = (e)=>{
        const {value} = e.target
        setFilter(value)
        setDataFetched(false)
    }
    const onSearching = (search_term)=>{
        setSearchTerm(search_term)
        setDataFetched(false)
    }

    

    return(
        <div className="devices">
            <span>Device Manager</span>
            <div>
                <div className='search-bar'>
                    <SearchBarEmp setSearchTerm={onSearching}/>
                </div>
                <div className='filter'>
                    <span>Status</span>
                    <select onChange={filterOnchange} name='status'>
                        <option value="">All</option>
                        <option value="in_use">Active</option>
                        <option value="not_in_use">Disabled</option>
                    </select>
                </div>
                <div>
                    <Link to='../addDevice' className="add-Link1"><button><img src={add}/>Add New</button></Link>
                </div>
            </div>
            
                    
                    {dataFetched && data ? 
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Device ID</th>
                                    <th>Device Status</th>
                                    <th>MAC ID</th>
                                    <th>ICCID</th>
                                    <th>Installation</th>
                                    <th>Installed by</th>
                                    <th>Last Location Update</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {data.map((value, index)=>{
                            return(
                                <tr>
                                    <td>{value.device_id}</td>
                                    {value.device_status === "in_use" ?
                                        <td><span className='in-use'>Working</span></td>
                                        : <td ><span className='not-in-use'>Disabled</span></td>
                                        }
                                    
                                    <td>{value.MAC_id}</td>
                                    <td>{value.iccid}</td>
                                    <td>{value.installation}</td>
                                    <td>{value.installed_by}</td>
                                    <td>{value.Last_update}</td>
                                    <td><span>&#x22EE;</span></td>
                                </tr>
                                    )
                                })}
                        </table>
                    </div>

                        :   dataFetched && !data && !error 
                        ?   <EmptyData message="No Devices"/>
                        :   error ? <h1>Loading failed</h1>
                        :   <Loading/>
                        }
                   

            
        </div>
    )
}