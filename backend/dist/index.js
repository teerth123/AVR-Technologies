"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const server = http_1.default.createServer(app);
const wss = new ws_1.WebSocketServer({ server });
app.get("/", (req, res) => {
    res.json({
        msg: "hello server "
    });
});
const user_auth_1 = require("./auth/user.auth");
app.use("/backend/v1", user_auth_1.userRouter);
server.listen(3000, () => { console.log("server running on 3000"); });
//users auth
//demo scan
//buy coins 
//charge vehicle
