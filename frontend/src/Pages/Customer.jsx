import { NavLink } from "react-router-dom"
import SideNav from "../Components/SideNav"
import {AiFillPlusCircle} from "react-icons/ai"
import {PiGenderIntersexBold} from "react-icons/pi"
import {GrUpdate} from "react-icons/gr"
import {AiFillDelete} from "react-icons/ai"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
function Customer(){

    const [customer, setcustomer] = useState([])

    const getAllcustomer =()=>{
        axios.get("http://localhost:1200/customer").then((response)=>{
            setcustomer(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getAllcustomer()
    },[])

    const deletecustomer = (id)=>{
        axios.delete(`http://localhost:1200/customer/${id}`).then(()=>{
            alert("Customer deleted Successfully")
            getAllcustomer()
        }).catch((error)=>{
            console.log(error)
        })
    }


    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>This is Customers page</h1>
        <div  className="addbtn" >
        <NavLink to="/addcustomer"><AiFillPlusCircle/></NavLink>
        </div>
        <div>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th><PiGenderIntersexBold/></th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Property_id</th>
                    <th>Registered Date</th>
                    <th> </th>
                    <th> </th>
                </tr>
                {
                    customer.map((cus, index)=>(
                <tr>
                    <td>{cus.id}</td>
                    <td>{cus.cusname}</td>
                    <td>{cus.gender}</td>
                    <td>{cus.age}</td>
                    <td>{cus.email}</td>
                    <td>{cus.property_id}</td>
                    <td>{cus.regdate}</td>
                    <td><AiFillDelete onClick={()=>deletecustomer(cus._id)}/></td>
                    <td><NavLink to="/updatecustomer"><GrUpdate/></NavLink></td>
                </tr>
                    ))
                }
                
                </tbody>
            </table>
        </div>
        </div>
    </div>
}
export default Customer