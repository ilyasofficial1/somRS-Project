const mongoose = require("mongoose");
mongoose.pluralize(null)
const ownerSchema = new mongoose.Schema({
 id:{
    type: Number,
    required: true,
  }, 
 owname:{
    type: String,
    required: true,
  }, 
 national_id:{
    type: Number,
    required: true,
  }, 
 gender:{
    type: String,
    required: true,
  }, 
 age:{
    type: Number,
    required: true,
  }, 
  email:{
    type:String,
    required: true,
  },
  property_id:{
    type:Number,
    required: true,
  },
  regdate: {
    type: String,
    required: true,
  },
});
const ownermodel =mongoose.models.owner || mongoose.model("owner", ownerSchema);
module.exports = ownermodel