const mongoose = require("mongoose");
mongoose.pluralize(null)
const userSchema = new mongoose.Schema({
 id:{
    type: Number,
    required: true,
  }, 
 username:{
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
  password:{
    type:String,
    required: true,
  },
  regdate: {
    type: String,
    required: true,
   // enum: ["active", "blocked","pending"]
  },
});
const usermodel =mongoose.models.users || mongoose.model("users", userSchema);
module.exports = usermodel