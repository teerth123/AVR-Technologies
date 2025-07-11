import express from "express"
import http from "http"
import { WebSocketServer } from "ws"

import { authUserRouter } from "./auth/user.auth"
import { userRouter } from "./enduser/user.routes"

const app = express()
app.use(express.json())
const server = http.createServer(app)
const wss = new WebSocketServer({server})

app.get("/", (req, res)=>{
    res.json({
        msg:"hello server "
    })
})

app.use("/backend/v1/auth", authUserRouter)
app.use("/backend/v1", userRouter);

server.listen(3000, ()=>{console.log("server running on 3000")})



//~~users auth~~
//demo scan
//buy coins 
//charge vehicle




//demo scan -> user will scan the QR code to connect with charging station