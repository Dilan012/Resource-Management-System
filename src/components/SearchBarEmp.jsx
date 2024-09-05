import './searchbaremp.css'
import search_icon from '../images/search.png'
export function SearchBarEmp(){
    return(
        <div className="search-bar-cont-emp" tabIndex='0'>
            <img src={search_icon}/>

            <input placeholder='Search...'></input>
        </div>
    )
}