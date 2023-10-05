import { NavLink } from "react-router-dom"
import SideNav from "../Components/SideNav"
import {AiFillPlusCircle} from "react-icons/ai"
import {PiGenderIntersexBold} from "react-icons/pi"
import {AiFillDelete} from "react-icons/ai"
import {GrUpdate} from "react-icons/gr"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
function Owner(){
    
    const [owner, setowner] = useState([])

    const getAllowner =()=>{
        axios.get("http://localhost:1200/owner").then((response)=>{
            setowner(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getAllowner()
    },[])

    const deleteowner = (id)=>{
        axios.delete(`http://localhost:1200/owner/${id}`).then(()=>{
            alert("Owner deleted Successfully")
            getAllowner()
        }).catch((error)=>{
            console.log(error)
        })
    }


    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>This is Owners page</h1>
        <div className="addbtn" >
        <NavLink to="/addowner"><AiFillPlusCircle/></NavLink>
        </div>
        <div>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>National_id</th>
                    <th><PiGenderIntersexBold/></th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Property_id</th>
                    <th>Date</th>
                    <th> </th>
                    <th> </th>
                </tr>
                {
                    owner.map((ow,index)=>(
                 <tr>
                    <td>{ow.id}</td>
                    <td>{ow.owname}</td>
                    <td>{ow.national_id}</td>
                    <td>{ow.gender}</td>
                    <td>{ow.age}</td>
                    <td>{ow.email}</td>
                    <td>{ow.property_id}</td>
                    <td>{ow.regdate}</td>
                    <td><AiFillDelete onClick={()=>deleteowner(ow._id)}/></td>
                    <td><GrUpdate/></td>
                </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        </div>
    </div>
}
export default Owner