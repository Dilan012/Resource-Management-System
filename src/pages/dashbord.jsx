import { Link, Route, Routes } from 'react-router-dom'
import admin_icon from '../images/emp2.png'
import revenue from '../images/revenue.png'
import add from '../images/add.png'
import ongoing from '../images/ongoing.png'
import device from '../images/device.png'
import './dashbord.css'
import { RegisterEmployee } from './dashbord/RegisterEmployee'
import { Employees } from './dashbord/Employees'
import { AddDevice } from './dashbord/addDevice'
import { Devices } from './dashbord/Devices'
export function DashBord(){

    
    return (
        <div className='dashbord-main-container'>
            <div>
                <div className='nav-drawer'>
                    <div className='custom'>
                    
                    <div className='nav-drawer-header'>
                        <img src={admin_icon}/>
                        <h3>Admin Portal</h3>
                    
                    </div>
                    <ul>
                        <span>Employees</span>

                        <Link className='nav-drawer-links-1' to='./registeremp'><li>Add new</li></Link>
                        <Link className='nav-drawer-links-1' to='./employee'><li>Find Employee</li></Link>
                    </ul>
                    
                    <ul>
                        <span>Devices</span>

                        <Link className='nav-drawer-links-1'to='./addDevice'><li><img src={add}/>Add new</li></Link>
                        <Link className='nav-drawer-links-1' to='./devices'><li><img src={device}/>Find Device</li></Link> 
                    </ul>
                    <ul>
                        <span>Deliveries</span>

                        <Link className='nav-drawer-links-1' ><li><img src={ongoing}/> Ongoing</li></Link>
                        <Link className='nav-drawer-links-1'><li><img src={revenue}/>Revenue</li></Link> 
                    </ul>
                </div>
                </div>
                <div className='dashbord-content'>
                    <Routes>
                        <Route path='/registeremp' element={<RegisterEmployee/>}/>
                        <Route path='/employee' element={<Employees/>}/>
                        <Route path='/addDevice' element={<AddDevice/>}/>
                        <Route path='/devices' element={<Devices/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}