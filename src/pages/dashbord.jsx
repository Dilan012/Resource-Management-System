import { Link, Route, Routes } from 'react-router-dom'
import add from '../images/add.png'
import device from '../images/device.png'
import home from '../images/home.png'
import cancel_icon from '../images/cancel.png'
import logout_icon from '../images/logout.png'
import staff from '../images/staff.png'
import './dashbord.css'
import { RegisterEmployee } from './dashbord/RegisterEmployee'
import { Employees } from './dashbord/Employees'
import logo from '../images/logo.png'
import { AddDevice } from './dashbord/addDevice'
import { Devices } from './dashbord/Devices'
import { Home } from './dashbord/home/home'
import { createContext, useRef, useState } from 'react'
import { click } from '@testing-library/user-event/dist/click'
import { useAuth } from '../authProvider'

export const NavBarContext = createContext()

export function DashBord(){

    const {logout} = useAuth()
    const [hide, setHide] = useState(true)
    const [darkTheme , setDarkTheme] = useState(true)
    const [clicked , setClicked] = useState("home")

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
                        <Link className='nav-drawer-links-1' to='./employee'><li className={clicked == "findEmp" ? "active-nav":""} id={"findEmp"} onClick={handleClick}><img src={staff}/>Find Employee</li></Link>
                    </ul>
                    <ul className='logout'>
                        <a className='nav-drawer-links-1'><li className="Emp" onClick={logout}><img src={logout_icon}/>Logout</li></a>
                    </ul>
                </div>  
                </div>
                <NavBarContext.Provider value={{hide,setHide, setDarkTheme, darkTheme}}>
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