import express from "express"
import jwt from "jsonwebtoken"


let app = express()
app.use(express.json())
app.post("/login",(req,res)=>{

let {email} = req.body
console.log(email)
let payload = {
    email
   
}
let token = jwt.sign(payload,"mm",{expiresIn:"1h"})
console.log(token)

return res.json(token)
})

// middleware for auth

app.use((req,res,next)=>{
   let token =  req.headers.authorization

   if(!token){
    console.log("not authorize")
    return res.send("Unauthorized")
   }

   let  decode = jwt.verify(token,"mm")
   req.email = decode.email

   next()

})


app.get("/dashboard",(req,res)=>{

    res.send("hi muzammil how are you "+ req.email)

})

app.listen(8000,()=>console.log("server have started"))