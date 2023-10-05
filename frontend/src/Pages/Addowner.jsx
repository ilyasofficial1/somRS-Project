import SideNav from "../Components/SideNav"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Addowner(){

    
    const [id, setid] = useState("")
    const [owname, setowname] = useState("")
    const [national_id, setnational_id] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
    const [property_id, setproperty_id] = useState("")
    const [regdate, setregdate] = useState("")

    const navigate = useNavigate()
    const registerowner= (event)=>{
        event.preventDefault()
        axios.post("http://localhost:1200/owner",{
            "id":id,
            "owname":owname,
            "national_id":national_id,
            "gender":gender,
            "age":age,
            "email":email,
            "property_id":property_id,
            "regdate":regdate
        }).then(()=>{
            alert("Property registered successfully",navigate("/owner")
            )
        }).catch((error)=>{
            console.log(error)
        })

    }


    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>Adding owner</h1>
        <form>
            <input value={id} onChange={(event)=> setid(event.target.value)} type="number" placeholder="id" required/><br></br>
            <input value={national_id} onChange={(event)=> setnational_id(event.target.value)} type="number" placeholder="National_id" required/><br></br>
            <input value={owname} onChange={(event)=> setowname(event.target.value)} type="text" placeholder="Name" required/><br></br>
            <input value={gender} onChange={(event)=> setgender(event.target.value)} type="text" placeholder="Gender" required/><br></br>
            <input value={age} onChange={(event)=> setage(event.target.value)} type="number" placeholder="Age" required/><br></br>
            <input value={email} onChange={(event)=> setemail(event.target.value)} type="email" placeholder="email" required/><br></br>
            <input value={property_id} onChange={(event)=> setproperty_id(event.target.value)} type="text" placeholder="property id" required/><br></br>
            <input value={regdate} onChange={(event)=> setregdate(event.target.value)} type="date" placeholder="registered date" required/><br></br>
            <button onClick={registerowner}>Save</button>
        </form>
        </div>
    </div>
}
export default Addowner