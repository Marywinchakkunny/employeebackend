const express  =require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const {employeemodel}=require("./models/employee.js")

const app=express()
app.use(cors())
app.use(express.json())
 
mongoose.connect("mongodb+srv://marywinchakkunny:marywinchakkunny2001@cluster0.nuf6v.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let user=new employeemodel(input)
    user.save()
    res.json({"status":"success"})
 
})

app.get("/view",(req,res)=>{

    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
}
)
app.post("/search",(req,res)=>{
    let input=req.body
    employeemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    )
})
app.post("/delete",(req,res)=>{
    let input=req,body
    employeemodel.findBYIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
    }
).catch(
    ()=>{
        res.json({"status":"fail"})
    }
)
    
})

app.listen(8088,()=>{
    console.log("Server started")
})