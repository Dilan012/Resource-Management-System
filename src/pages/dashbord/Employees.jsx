import { SearchBarEmp } from "../../components/SearchBarEmp"
import './employee.css'
export function Employees(){

    const data =[{emp_num:12345, fname:"test secons", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test secons", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123},{emp_num:12345, fname:"test", lname:"test", role:'test', station:"test", approved_by:456123, requested_by:456123}]
    console.log(data)
    return(
        <div className="emp-main-container">
            <SearchBarEmp/>
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
        </div>
    )
}