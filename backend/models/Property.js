const mongoose = require('mongoose');
mongoose.pluralize(null)
const propertySchema =new mongoose.Schema({
image:{
    type:String,
    required: true,
},
id:{
    type:Number,
    required: true,
    // enum: ["single-family home", "multi-family home", "commercial property"]
},
type:{
    type:String,
    required: true,
    // enum: ["single-family home", "multi-family home", "commercial property"]
},
areasize:{
    type:String,
    required:true,
},
Address:{
    type:String,
    required:true,
},
City: {
    type:String,
    required:true,
},
State: {
    type:String,
    required:true,

},
status:{
    // enum:["forRent","for sale"],
    type:String,
    required: true,
},

Numberofbathrooms:{
    type:Number,
    required:true,
},
Numberofbedrooms:{
    type:Number,
    required:true,
},
Numberofkitchens:{
    type:Number,
    required:true,
},
owner:{
    type:String,
    required:true
},
Numberofpacking:{
    type:Number,
    required:true
} ,
price:{
    type:Number,
    required:true
} ,
regdate:{
    type:String,
    required:true
}
})
const propertymodel =mongoose.models.property || mongoose.model("property", propertySchema);
module.exports=propertymodel