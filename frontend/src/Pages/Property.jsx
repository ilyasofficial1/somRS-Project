import { NavLink, useParams } from "react-router-dom"
import SideNav from "../Components/SideNav"
import {AiFillPlusCircle} from "react-icons/ai"
import {AiFillCar} from "react-icons/ai"
import {FaBed} from "react-icons/fa"
import {FaBath} from "react-icons/fa"
import {FaKitchenSet} from "react-icons/fa6"
import {FaLocationDot} from "react-icons/fa6"
import{AiFillDollarCircle} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"
import {GrUpdate} from "react-icons/gr"
import axios from "axios"
import { useEffect, useState } from "react"
function Property(){
    const [property, setProperty] = useState([])

    const getAllProperty =()=>{
        axios.get("http://localhost:1200/property").then((response)=>{
            setProperty(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getAllProperty()
    },[])

    const deletePropert = (id)=>{
        axios.delete(`http://localhost:1200/property/${id}`).then(()=>{
            alert("Propert deleted Successfully")
            getAllProperty()
        }).catch((error)=>{
            console.log(error)
        })
    }


    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>This is Property page</h1>
        <div  className="addbtn" >
        <NavLink to="/addproperty"><AiFillPlusCircle/></NavLink>
        </div>
        <div>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Area Size</th>
                    <th>Owner</th>
                    <th><FaLocationDot/></th>
                    <th><FaBed/></th>
                    <th><FaBath/></th>
                    <th><FaKitchenSet/></th>
                    <th><AiFillCar/></th>
                    <th><AiFillDollarCircle/></th>
                    <th> </th>
                    <th> </th>
                </tr>
                {
                    property.map((prop, index)=>(
                <tr>
                    <td>{prop.id}</td>
                    <td>{prop.type}</td>
                    <td>{prop.status}</td>
                    <td>{prop.areasize}</td>
                    <td>{prop.owner}</td>
                    <td>{prop.Address}, {prop.City}</td>
                    <td>{prop.Numberofbedrooms}</td>
                    <td>{prop.Numberofbathrooms}</td>
                    <td>{prop.Numberofkitchens}</td>
                    <td>{prop.Numberofpacking}</td>
                    <td>{prop.price}</td>
                    <td><AiFillDelete onClick={()=>deletePropert(prop._id)}/></td>
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
export default Property