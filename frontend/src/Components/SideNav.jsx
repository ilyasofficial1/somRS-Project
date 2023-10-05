import {NavLink, Link} from "react-router-dom"
import {BiSolidDashboard} from "react-icons/bi"
import {BsBuildings} from "react-icons/bs"
import {BsFillPersonFill} from "react-icons/bs"
import {MdLogout} from "react-icons/md"

function SideNav(){

    return <div className="sidenav">
        
        <h1>SOMRS</h1>
        <div className="links">
        <NavLink to="/dashboard"><BiSolidDashboard/>Dashboard</NavLink>
        <NavLink to="/property"><BsBuildings/>Property</NavLink>
        <NavLink to="/owner"><BsFillPersonFill/>Owner</NavLink>
        <NavLink to="/customer"><BsFillPersonFill/>Customer</NavLink>
        <NavLink to="/user"><BsFillPersonFill/>User</NavLink>
        <NavLink to="/logout"><MdLogout/>Log out</NavLink>
        </div>
    </div>
}
export default SideNav