import { Link, Route, Routes } from 'react-router-dom'
import admin_icon from '../images/emp2.png'
import revenue from '../images/revenue.png'
import add from '../images/add.png'
import ongoing from '../images/ongoing.png'
import device from '../images/device.png'
import home from '../images/home.png'
import cancel_icon from '../images/cancel.png'
import './dashbord.css'
import { RegisterEmployee } from './dashbord/RegisterEmployee'
import { Employees } from './dashbord/Employees'
import logo from '../images/logo.png'
import { AddDevice } from './dashbord/addDevice'
import { Devices } from './dashbord/Devices'
import { Home } from './dashbord/home/home'
import { createContext, useRef, useState } from 'react'
import { click } from '@testing-library/user-event/dist/click'

export const NavBarContext = createContext()

export function DashBord(){

    
    const [hide, setHide] = useState(false)
    const [clicked , setClicked] = useState("home")
    console.log(hide)

    const handleClick = (event)=>{
        setClicked(event.target.id)
    }
    const handlehide = ()=>{
        setHide(true)
    }

    return (
        <div className='dashbord-main-container'>
            <div>
                <div className={hide ? "invisibl nav-drawer" : 'nav-drawer'}>
                    <div className='custom'>
                    
                    <div className='nav-drawer-header'>
                        <img src={logo}/>
                        <h3>Rail Express</h3>
                        <img onClick={handlehide} className= "cancel" src={cancel_icon} />
                    </div>
                    <ul>
                       
                       <Link className='nav-drawer-links-1' to='./'><li className={clicked == "home" ? "active-nav":""} id={"home"} onClick={handleClick}><img src={home}/>Home</li></Link> 
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
                <NavBarContext.Provider value={{hide,setHide}}>
                    <div className={'dashbord-content'}>
                        <Routes>
                            <Route path='/registeremp' element={<RegisterEmployee/>}/>
                            <Route path='/employee' element={<Employees/>}/>
                            <Route path='/addDevice' element={<AddDevice/>}/>
                            <Route path='/devices' element={<Devices/>}/>
                            <Route path='/' element={<Home/>}/>
                        </Routes>
                    </div>
                </NavBarContext.Provider>
            </div>
        </div>
    )
}