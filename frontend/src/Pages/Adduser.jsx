import SideNav from "../Components/SideNav"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Adduser(){

    const [id, setid] = useState("")
    const [username, setusername] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState("")
    const [password, setpassword] = useState("")
    const [regdate, setregdate] = useState("")

    const navigate = useNavigate()
    const registerUser= (event)=>{
        event.preventDefault()
        axios.post("http://localhost:1200/users",{
                "id":id,
                "username":username,
                "gender":gender,
                "age":age,
                "password":password,
                "regdate":regdate
        }).then(()=>{
            alert("User registered successfully",navigate("/user")
            )
        }).catch((error)=>{
            console.log(error)
        })

    }
    
    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>Adding user</h1>
        <form>
            <input value={id} onChange={(event)=> setid(event.target.value)} type="number" placeholder="id" required/><br></br>
            <input value={username} onChange={(event)=> setusername(event.target.value)} type="text" placeholder="full name" required/><br></br>
            <input value={gender} onChange={(event)=> setgender(event.target.value)} type="text" placeholder="Enter user gender" required/><br></br>
            <input value={age} onChange={(event)=> setage(event.target.value)} type="number" placeholder="age" required/><br></br>
            <input value={password} onChange={(event)=> setpassword(event.target.value)} type="password" placeholder="password" required/><br></br>
            <input value={regdate} onChange={(event)=> setregdate(event.target.value)} type="date" placeholder="registered date" required/><br></br>
            <button onClick={registerUser}>Save</button>
        </form>
        </div>
    </div>
}
export default Adduser