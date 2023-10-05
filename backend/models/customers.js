const mongoose = require("mongoose");
mongoose.pluralize(null)
const customerSchema = new mongoose.Schema({
 id:{
    type: Number,
    required: true,
  }, 
 cusname:{
    type: String,
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
const customermodel =mongoose.models.customer || mongoose.model("customer", customerSchema);
module.exports = customermodel