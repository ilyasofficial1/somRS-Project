import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Addproperty from "./Pages/Addproperty"
import Property from "./Pages/Property"
import Owner from "./Pages/Owner"
import Logout from "./Pages/Logout"
import Login from "./Pages/Login"
import Addcustomer from "./Pages/Addcustomer"
import Addowner from "./Pages/Addowner"
import Adduser from "./Pages/Adduser"
import User from "./Pages/User"
import Customer from "./Pages/Customer"
import Updatecustomer from "./Components/Updatecustomer"
function App() {
  return <>
       <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/property" element={<Property/>} />
        <Route path="/addproperty" element={<Addproperty/>} />
        <Route path="/owner" element={<Owner/>} />
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/logout" element={<Logout/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/addcustomer" element={<Addcustomer/>}/>
        <Route path="/addowner" element={<Addowner/>}/>
        <Route path="/adduser" element={<Adduser/>}/>
        <Route path="/updatecustomer" element={<Updatecustomer/>}/>
       </Routes>
       </>
}
export default App
