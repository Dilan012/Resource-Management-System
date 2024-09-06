import { SearchBarEmp } from "../../components/SearchBarEmp"
import './employee.css'
import emp from '../../images/emp.png'
import emp2 from '../../images/emp2.png'
export function Employees(){



    const station_masters = 5
    const general_staff = 9
    const cities = ['none','gsgf','gdfgsadg','fadsgrg','gohjuoy','gsgf','gdfgsadg','fadsgrg','gohjuoy','gsgf','gdfgsadg','fadsgrg','gohjuoy','gsgf','gdfgsadg','fadsgrg','gohjuoy','gsgf','gdfgsadg','fadsgrg','gohjuoy','gsgf','gdfgsadg','fadsgrg','gohjuoy','gsgf','gdfgsadg','fadsgrg','gohjuoy','gsgf','gdfgsadg','fadsgrg','gohjuoy']
   const Role = ['none','general_staff', 'station_master']
const data =[{emp_num:12345, fname:"test secons", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test secons", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test secons", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test secons", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123}]
    console.log(data)
    return(
        <div className="emp-main-container">
            <SearchBarEmp/>
            <div className="base-container-emp">
                <div className="table-container-emp">

                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Station</th>
                                <th>Role</th>
                                <th>Approved by</th>
                                <th>Requested by</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    
                            {data.map((value, index)=>{
                                return(
                                    <tr>
                                        <td>{value.emp_num}</td>
                                        <td>{value.fname.concat(" ",value.lname)}</td>
                                        <td>{value.station}</td>
                                        <td>{value.station}</td>
                                        <td>{value.approved_by}</td>
                                        <td>{value.requested_by}</td>
                                        <td><select>
                                                <option>Block</option>
                                                <option>ublock</option>
                                            </select></td>
                                    </tr>
                                )
                            })}
                    
                    </table>
                </div>
                <div className="emp-option-container">
                    <div>
                        <ul>
                            <span>filter</span> 
                            <h4>Role</h4>
                            <li><select>
                                {cities.map((value, index)=>{
                                    return(<option value={value}>{value}</option>)
                                })}
                            </select></li>
                            <h4>Station</h4>
                            <li>
                                <select>
                                    {Role.map((value, index)=>{return(<option value={value}>{value}</option>)})}
                                </select>
                            </li>
                        </ul>
                        <div className="emp-count-container">
                            <div>
                                <img src={emp}/>
                                <span>Station Masters{' : '+station_masters}</span>
                            </div>
                            <div>
                                <img src={emp2}/>
                                <span>General Staff{" : "+station_masters}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}