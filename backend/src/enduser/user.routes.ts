import { Router } from "express";

export const userRouter = Router() 
userRouter.use("/read", userRouter) //change to readUserRouter and so