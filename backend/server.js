const express= require ('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const port =1200
const propertymodel = require('./models/Property')
const customermodel = require('./models/customers')
const ownermodel = require('./models/owners')
app.use("/images", express.static("images"))
const usermodel = require ('./models/users')
mongoose.connect("mongodb://0.0.0.0:27017/REM").then(()=>{
    console.log("database has been connected  succesfully")
}).catch((err)=>{
    console.log(err)
})
 app.get("/property",async(req,res)=>{
    try{
        const getData = await propertymodel.find()
    res.send(getData)
    }
    catch(err){
        console.log(err)
    }
 })
 app.get("/property/:id",async(req,res)=>{
  try{
    const dropedid = req.params._id;
  const data = await propertymodel.findOne(dropedid)
  res.send(data)
}

  catch(err){
    console.log(err)
  }
 })
 app.post("/property",async(req,res)=>{
  try {
  const newdata =  propertymodel(req.body)
  const savedata = await newdata.save()
  res.send("data has been saved successfully")
 

  } catch (error) {
    console.log(error)
  }
 })
 app.put("/property/:id",async (req,res)=>{
 try {
  const updatedData = await propertymodel.updateOne(
    {_id: req.params.id},
    {$set: req.body}
    )
    res.send("successfuly updated")

 } catch (error) {
  console.log(error)
 }
})
app.delete("/property/:id",async(req,res)=>{
  try {
    const id = req.params._id
    const deleteData = await propertymodel.deleteOne(id)
  res.send("deleted successfully")
  } catch (error) {
    console.log(error)
    
  }
})
// Customer API
app.post("/customer",async(req,res)=>{
  try {
  const newdata =  customermodel(req.body)
  const savedata = await newdata.save()
  res.send("data has been saved successfully")
 

  } catch (error) {
    console.log(error)
  }
 })

app.get("/customer",async(req,res)=>{
  try{
      const getData = await customermodel.find()
      res.send(getData)
  }
  catch(err){
      console.log(err)
  }
})
app.delete("/customer/:id",async(req,res)=>{
  try {
    const id = req.params._id
    const deleteData = await customermodel.deleteOne(id)
  res.send("deleted successfully")
  } catch (error) {
    console.log(error)
    
  }
})
app.put("/customer/:id",async (req,res)=>{
  try {
   const updatedData = await customermodel.updateOne(
     {_id: req.params.id},
     {$set: req.body}
     )
     res.send(updatedData)
 
  } catch (error) {
   console.log(error)
  }
 })
 app.get("/customer/:id",async(req,res)=>{
  try{
    const dropedid = req.params._id;
  const data = await customermodel.findOne(dropedid)
  res.send(data)
}

  catch(err){
    console.log(err)
  }
 })

// Owner API
app.post("/owner",async(req,res)=>{
  try {
  const newdata =  ownermodel(req.body)
  const savedata = await newdata.save()
  res.send("data has been saved successfully")
 

  } catch (error) {
    console.log(error)
  }
 })

app.get("/owner",async(req,res)=>{
  try{
      const getData = await ownermodel.find()
      res.send(getData)
  }
  catch(err){
      console.log(err)
  }
})
app.delete("/owner/:id",async(req,res)=>{
  try {
    const id = req.params._id
    const deleteData = await ownermodel.deleteOne(id)
  res.send("deleted successfully")
  } catch (error) {
    console.log(error)
    
  }
})

//   // users

  app.get("/users", async(req, res) => {
    try {
      const userdata = await usermodel.find();
      res.json(userdata);
    } catch (error) {
      res.send(error.message);
    }
  });
//   app.get("/users/:id",async(req,res)=>{
//     try {
//       const dropedid = req.params._id
//       const getone = await usermodel.findOne(dropedid)
//       res.send(getone)
//     } catch (error) {
//       console.log(error)
      
//     }
//   })
//   // getting the sum of rent money
//   app.get("/rent",async(req,res)=>{
//     const totalrents = await Tenantmodel.aggregate([
//       {
//         $group: {_id: null, totalrents: {$sum:"$Rent"}}
//       }
//     ])
//     console.log(totalrents)
//     res.send({totalrents})
//   })
//   app.get("/allusers",async(req,res)=>{
//     const getallusers= await usermodel.countDocuments()
//     res.send({getallusers})
//   })
//   app.get("/alltenants",async(req,res)=>{
//     const getalltenants= await Tenantmodel.countDocuments()
//     res.send({getalltenants})
//   })
//   app.get("/allproperty",async(req,res)=>{
//     const getallproperty= await propertymodel.countDocuments()
//     res.send({getallproperty})
//   })
  app.post("/users",async(req,res) => {
        try {
          const newdata= usermodel(req.body)
          const savedata = await newdata.save()
          // res.send("data has been saved sucessfully")
      res.json({
        status: "success",
        message: "successfully registered",
      });
    } catch (error) {
      res.send(error.message);
    }
   });
//   app.put("/users/:id",async(req,res)=>{
//    try {
//     const dropedid = req.params._id
//     const editeddata = await usermodel.updateOne(
//       dropedid,
//       {$set: req.body}
//     )
//     res.send("updated succesfully")
//    } catch (error) {
//     console.log(error)
//    }
//   })
  app.delete("/users/:id",async(req,res)=>{
    try {
      const id = req.params._id
      const deletedata = await usermodel.deleteOne(id)
      res.send("deleted")
      
    } catch (error) {
      console.log(error)
      
    }
  })


  app.get("/price/count",async(req,res)=>{
    const getprice = await propertymodel.aggregate([{
      $group: {_id: null, totalPrice:{$sum: "$price"}}
  }])
    res.send({getprice})
  })
  app.get("/customer/count",async(req,res)=>{
    const getcustomer = await customermodel.countDocuments()
    res.send({getcustomer})
  })
  



// // Login;
// app.post("/login", async (req, res) => {
//   try {
//     // loginValidation
//     // const { error } = (req.body);
//     // if (error) return res.send(error.message);
//     // let currentuserdata = await usermodel.findOne({username:req.body.username})
//     // if (!currentuserdata) return res.send({status:"error",message: "username or  password not found"});
//     // let validpassword = await bcrypt.compare(req.body.password,currentuserdata.password);
//     // if (!validpassword) return res.json({status: "success",message:"loged in succesfully "});
//    const {username,password}=req.body
//    usermodel.findOne({username:username})
//     .then(user=>{
//       if(user){
//         if(user.password===password){
//           res.json("success")
//         }
//         else {
//           res.json("the password or username  incorrect")
//         }
       
//       }
//       else{
//         res.json("no record exist")
//       }
//     })
//   }
//     catch (error) {
//     res.send(error.message);
//   }

// });
app.listen(port,()=>{
  console.log("server  running at port",port)
})