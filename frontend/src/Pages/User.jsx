import { NavLink } from "react-router-dom"
import SideNav from "../Components/SideNav"
import {AiFillPlusCircle} from "react-icons/ai"
import {PiGenderIntersexBold} from "react-icons/pi"
import {AiFillDelete} from "react-icons/ai"
import {GrUpdate} from "react-icons/gr"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
function User(){

    const [users, setusers] = useState([])

    const getAllUser =()=>{
        axios.get("http://localhost:1200/users").then((response)=>{
            setusers(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getAllUser()
    },[])

    const deleteUser = (id)=>{
        axios.delete(`http://localhost:1200/users/${id}`).then(()=>{
            alert("Propert deleted Successfully")
            getAllUser()
        }).catch((error)=>{
            console.log(error)
        })
    }

    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>This is Users page</h1>
        <div className="addbtn" >
        <NavLink to="/adduser"><AiFillPlusCircle/></NavLink>
        </div>
        <div>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th><PiGenderIntersexBold/></th>
                    <th>Password</th>
                    <th>Registerd Date</th>
                    <th> </th>
                    <th> </th>
                </tr>
                {
                    users.map((user, index)=>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.password}</td>
                    <td>{user.regdate}</td>
                    <td><AiFillDelete onClick={()=>deleteUser(user._id)}/></td>
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
export default User