import { Link, Route, Routes } from 'react-router-dom'
import admin_icon from '../images/admin.png'
import './dashbord.css'
import { RegisterEmployee } from './dashbord/RegisterEmployee'
import { Employees } from './dashbord/Employees'
export function DashBord(){
    return (
        <div className='dashbord-main-container'>
            <div>
                <div className='nav-drawer'>
                    <div className='nav-drawer-header'>
                        <img src={admin_icon}/>
                        <h3>Admin Portal</h3>
                    
                    </div>
                    <ul>
                        <span>Employees</span>

                        <Link className='nav-drawer-links-1' to='./registeremp'><li>add new</li></Link>
                        <Link className='nav-drawer-links-1' to='./employee'><li>Find Employee</li></Link>
                    </ul>
                    
                    <ul>
                        <span>Devices</span>

                        <Link className='nav-drawer-links-1' ><li>add new</li></Link>
                        <Link className='nav-drawer-links-1'><li>Find Device</li></Link> 
                        <Link className='nav-drawer-links-1'><li>All Devices</li></Link>   
                    </ul>
                    <ul>
                        <span>Deliveries</span>

                        <Link className='nav-drawer-links-1' ><li>Ongoing</li></Link>
                        <Link className='nav-drawer-links-1'><li>Revenue</li></Link> 
                        <Link className='nav-drawer-links-1'><li>All Devices</li></Link>   
                    </ul>
                </div>
                <div className='dashbord-content'>
                    <Routes>
                        <Route path='/registeremp' element={<RegisterEmployee/>}/>
                        <Route path='/employee' element={<Employees/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}