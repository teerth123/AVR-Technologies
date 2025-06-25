import express from "express"
import http from "http"
import { WebSocketServer } from "ws"

const app = express()
app.use(express.json())
const server = http.createServer(app)
const wss = new WebSocketServer({server})

import { userRouter } from "./routes/user.routes"
app.use("/backend/v1", userRouter);
server.listen(3000, ()=>{console.log("server running on 3000")})
