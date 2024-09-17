import './searchbaremp.css'
import search_icon from '../images/search.png'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'
export function SearchBarEmp({setSearchTerm}){

    const [input, setInput] = useState({})

    const onChange = (e)=>{
       const {name, value} = e.target 
       setInput(value)
       setSearchTerm(value)
    }

    const onEnterPressed = (e) =>{
        if(e.key ==="Enter"){
            setSearchTerm(input)
        }
    }
    return(
        <div className="search-bar-cont-emp" tabIndex='0'>
            <img src={search_icon}/>

            <input type='text' placeholder='Search...' onKeyUp={onEnterPressed} onChange={onChange} name="search_term"></input>
        </div>
    )
}