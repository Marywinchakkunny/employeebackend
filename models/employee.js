const mongoose =require("mongoose")
const schema =mongoose.Schema(
    
    { 

        "title": {type:String,required:true},
        "empname": {type:String,required:true},
        "department": {type:String,required:true},
        "salary": {type:String,required:true}
    }
)

let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}