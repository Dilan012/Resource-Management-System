import { Link, Route, Routes } from 'react-router-dom'
import admin_icon from '../images/emp2.png'
import revenue from '../images/revenue.png'
import add from '../images/add.png'
import ongoing from '../images/ongoing.png'
import device from '../images/device.png'
import home from '../images/home.png'
import './dashbord.css'
import { RegisterEmployee } from './dashbord/RegisterEmployee'
import { Employees } from './dashbord/Employees'
import { AddDevice } from './dashbord/addDevice'
import { Devices } from './dashbord/Devices'
import { Home } from './dashbord/home/home'
import { useState } from 'react'
import { click } from '@testing-library/user-event/dist/click'
export function DashBord(){

    const [clicked , setClicked] = useState("home")
    const handleClick = (event)=>{
        setClicked(event.target.id)
    }

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
                       

                       <Link className='nav-drawer-links-1' to='./home'><li className={clicked == "home" ? "active-nav":""} id={"home"} onClick={handleClick}><img src={home}/>Home</li></Link> 
                       <Link className='nav-drawer-links-1' ><li className={clicked == "onGoing" ? "active-nav":""} id={"onGoing"} onClick={handleClick}><img src={ongoing}/> Ongoing</li></Link>
                   </ul>
                    
                    <ul>
                        <span>Devices</span>

                        <Link className='nav-drawer-links-1'to='./addDevice'><li className={clicked == "adddevice" ? "active-nav":""} id={"adddevice"} onClick={handleClick} ><img src={add}/>Add new</li></Link>
                        <Link className='nav-drawer-links-1' to='./devices'><li className={clicked == "devices" ? "active-nav":""} id={"devices"} onClick={handleClick} ><img src={device}/>Find Device</li></Link> 
                    </ul>
                    <ul>
                        <span>Employees</span>

                        <Link className='nav-drawer-links-1' to='./registeremp'><li className={clicked == "Emp" ? "active-nav":""} id={"Emp"} onClick={handleClick}><img src={add}/>Add new</li></Link>
                        <Link className='nav-drawer-links-1' to='./employee'><li className={clicked == "findEmp" ? "active-nav":""} id={"findEmp"} onClick={handleClick}>Find Employee</li></Link>
                    </ul>
                   
                </div>
                </div>
                <div className='dashbord-content'>
                    <Routes>
                        <Route path='/registeremp' element={<RegisterEmployee/>}/>
                        <Route path='/employee' element={<Employees/>}/>
                        <Route path='/addDevice' element={<AddDevice/>}/>
                        <Route path='/devices' element={<Devices/>}/>
                        <Route path='/home' element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}