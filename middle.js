import express from "express"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"

let app = express()

let filepath  = fileURLToPath(import.meta.url)
let __dirname = path.dirname(filepath)


app.use((req,res,next)=>{

    let filename = path.join(__dirname,"url_data.txt")

   fs.writeFile(filename,`the method is ${req.method} that called at ${ new Date().toLocaleTimeString()}\n`
  ,  { flag: "a" }
   ,(err,resulte)=>{
   if(err){
        console.log("not submited",err)
    return false
    }

    console.log("submited")
        next()
   })

    
})

app.get("/",(req,res)=>{
    res.send("hello"+__dirname)
})



app.listen(8000,()=>console.log("server is started "))