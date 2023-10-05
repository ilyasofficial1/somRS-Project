import SideNav from "../Components/SideNav"
import { useEffect, useState } from "react"
import axios from "axios"
function Dashboard(){
    
    const [totalPrice, settotalPrice] = useState()
    const [totalCustomers, settotalCustomers] = useState()

    const gettotalPrice = ()=>{
        axios.get("http://localhost:1200/price/count").then((res)=>{
            settotalPrice(res.data.getprice[0].totalPrice)
        })
    }

    const gettotalCustomers = ()=>{
        axios.get("http://localhost:1200/customer/count").then((res)=>{
            settotalCustomers(res.data.getcustomer)
        })
    }
    useEffect(()=>{
        gettotalPrice()
        gettotalCustomers()
    },[])


    return <div>
        <SideNav/>
        <div className="main">
        <h1 style={{textAlign:"center", marginBottom:"5px"}}>This is Dashboard page</h1>
        <div className="box-parent">
            <div className="box">
                <h3>Total property price</h3>
                <h1>$ {totalPrice}</h1>
            </div>
            <div className="box">
                <h3>Total customers</h3>
                <h1>{totalCustomers}</h1>
            </div>
            <div className="box">
                <h3>Property Name</h3>
            </div>
        </div>
        </div>
        
    </div>
}
export default Dashboard