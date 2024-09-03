import { Link } from 'react-router-dom'
import './dashbord.css'
export function DashBord(){
    return (
        <div className='dashbord-main-container'>
            <div>
                <div className='nav-drawer'>
                    <ul>
                        <span>Employees</span>

                        <Link className='nav-drawer-links-1'><li>add new</li></Link>
                        <Link className='nav-drawer-links-1'><li>Find Employee</li></Link>
                    </ul>
                    
                    <ul>
                        <span>Devices</span>

                        <Link className='nav-drawer-links-1' ><li>add new</li></Link>
                        <Link className='nav-drawer-links-1'><li>Find Device</li></Link>   
                    </ul>
                </div>
                <div className='dashbord-content'>
                    <h1>test</h1>
                </div>
            </div>
        </div>
    )
}