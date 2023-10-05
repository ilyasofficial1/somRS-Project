

const [pid, setid] = useState("")
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
const params = useParams()

const getOneproperty =()=>{
    axios.get(`http://localhost:1200/property/${params.id}`).then((response)=>{
        setid(response.data.id)
        settype(response.data.type)
        setareasize(response.data.areasize)
        setAddress(response.data.Address)
        setcity(response.data.city)
        setstate(response.data.state)
        setstatus(response.data.status)
        setbathroom(response.data.bathroom)
        setbedroom(response.data.bedroom)
        setkitchen(response.data.kitchen)
        setowner(response.data.owner)
        setpacking(response.data.packing)
        setprice(response.data.price)
        setregdate(response.data.regdate)

    }).catch((error)=>{
        console.log(error)
    })
}