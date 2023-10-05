import {BsFillLockFill} from "react-icons/bs"
import {BsFillPersonFill} from "react-icons/bs"
import Dashboard from "./Dashboard"
import {React, useSate, useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Login(){
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const loginAdmin = (event) => {
        event.preventDefault()
        axios.post("http://localhost:1200/user", {
           "username": username,
           "password": password,
           
        }).then((response) => {

           if(response.data.username){
            //store admin data in localStorage
            localStorage.setItem("admin", JSON.stringify(response.data) )
            navigate("/dashboard")
           }

           else {
            alert("username or password incorrect!")
           }
        }).catch((error) => {
            console.log(error)
        })
     
    }


    return <div>
        <div className="login">
            <div>

            </div>
        <form>
            <h2 style={{textAlign:"center"}}>LOGIN</h2>
            <label>Username</label> <br></br>
            <input value={username} onChange={(event) => {
                setUsername(event.target.value)
            }} type="text" placeholder="Username" required/> <br></br>
            <label>Password</label> <br></br>
            <input value={password} onChange={(event) => {
                setPassword(event.target.value)
            }} type="Password" placeholder="Password" required/>
            
            <BsFillLockFill style={{position:"absolute", color:"darkblue", left:"32", top:"180"}}/> 
            <BsFillPersonFill style={{position:"absolute", color:"darkblue", left:"32", top:"103"}}/> 
            <br></br>
            <button onClick={loginAdmin}>Log in</button>
        </form>
        </div>
    </div>
}
export default Login