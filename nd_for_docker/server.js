import express from "express"

let app = express()

app.get("/",(req,res)=>{
    return res.json({
        message:"hi muzammil your server run successfully"
    })
})

app.listen(8000,()=>console.log("server started "))