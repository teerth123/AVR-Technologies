import { Router } from "express";
import { postUserRouter } from "./actions/post.user";

export const userRouter = Router() 
// userRouter.use("/read", userRouter) //change to readUserRouter and so
userRouter.use("/post", postUserRouter)
