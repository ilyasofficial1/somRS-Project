import { useState } from "react"
import SideNav from "../Components/SideNav"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
function Addproperty(){
    const [image, setimage] = useState("")
    const [id, setid] = useState("")
    const [type, settype] = useState("")
    const [areasize, setareasize] = useState("")
    const [Address, setAddress] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [status, setstatus] = useState("")
    const [bathroom, setbathroom] = useState("")
    const [bedroom, setbedroom] = useState("")
    const [kitchen, setkitchen] = useState("")
    const [owner, setowner] = useState("")
    const [packing, setpacking] = useState("")
    const [price, setprice] = useState("")
    const [regdate, setregdate] = useState("")

    const navigate = useNavigate()
    const registerproperty= (event)=>{
        event.preventDefault()
        axios.post("http://localhost:1200/property",{
                "image":image,
                "id":id,
                "type":type,
                "areasize":areasize,
                "Address":Address,
                "City":city,
                "State":state,
                "status":status,
                "Numberofbathrooms":bathroom,
                "Numberofbedrooms":bedroom,
                "Numberofkitchens":kitchen,
                "price":price,
                "owner":owner,
                "Numberofpacking":packing,
                "regdate":regdate
        }).then(()=>{
            alert("Property registered successfully",navigate("/property")
            )
        }).catch((error)=>{
            console.log(error)
        })

    }
    return <div>
        <SideNav/>
        <div className="main">
            <h1 style={{textAlign:"center", marginBottom:"5px"}}>Adding property</h1>
        <form>
            <input value={image} onChange={(event)=> setimage(event.target.value)} type="file" placeholder="Image" required/><br></br>
            <input value={id} onChange={(event)=> setid(event.target.value)} type="number" placeholder="id" required/><br></br>
            <input value={type} onChange={(event)=> settype(event.target.value)} type="text" placeholder="type" required/><br></br>
            <input value={areasize} onChange={(event)=> setareasize(event.target.value)} type="text" placeholder="area size" required/><br></br>
            <input value={bedroom} onChange={(event)=> setbedroom(event.target.value)} type="number" placeholder="bed room" required/><br></br>
            <input value={bathroom} onChange={(event)=> setbathroom(event.target.value)} type="number" placeholder="bathroom" required/><br></br>
            <input value={kitchen} onChange={(event)=> setkitchen(event.target.value)} type="number" placeholder="kitchen" required/><br></br>
            <input value={packing} onChange={(event)=> setpacking(event.target.value)} type="number" placeholder="parking" required/><br></br>
            <input value={owner} onChange={(event)=> setowner(event.target.value)} type="text" placeholder="Owner" required/><br></br>
            <input value={Address} onChange={(event)=> setAddress(event.target.value)} type="text" placeholder="Address" required/><br></br>
            <input value={city} onChange={(event)=> setcity(event.target.value)} type="text" placeholder="City" required/><br></br>
            <input value={state} onChange={(event)=> setstate(event.target.value)} type="text" placeholder="State" required/><br></br>
            <input value={status} onChange={(event)=> setstatus(event.target.value)} type="text" placeholder="Status" required/><br></br>
            <input value={price} onChange={(event)=> setprice(event.target.value)} type="number" placeholder="Price" required/><br></br>
            <input value={regdate} onChange={(event)=> setregdate(event.target.value)} type="date" placeholder="registered date" required/><br></br>
            <button onClick={registerproperty}>Save</button>
        </form>
        </div>
        <ToastContainer/>
    </div>
}
export default Addproperty