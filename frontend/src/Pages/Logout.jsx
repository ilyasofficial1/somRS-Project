import { useNavigate } from "react-router-dom"
import SideNav from "../Components/SideNav"

function Logout(){
    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>This is Log out page</h1>
        <button>Log out now</button>
        </div>
    </div>
}
export default Logout