import e, { Router } from "express";
import { PrismaClient } from "../generated/prisma";
export const authUserRouter = Router()

// import bodyParser from
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

import { signinMiddleware, signupMiddleware } from "../middleware/auth.middleware";
dotenv.config()
const secret = process.env.SECRET
const prisma = new PrismaClient

//hidden apis for onboarding OEM, resellers
//operators onboarding apis might have to be public


authUserRouter.post("/signup", signupMiddleware, async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!secret) {
            console.error("JWT_SECRET not found")
            return
        }

        if (existingUser && existingUser.lastName === lastName && existingUser.firstName === firstName && existingUser.password === password) {
            const token = jwt.sign({ email: email, id: existingUser.id }, secret, { expiresIn: "30d" })
            res.json({
                msg: "logging you in",
                token
            })
            
        }

        else if(existingUser && (existingUser.lastName != lastName || existingUser.firstName != firstName || existingUser.password != password)){
            res.json({
                msg:"incorrect credentials, try again"
            })
            return;
        }

        else if(!existingUser){
            const newUser = await prisma.user.create({
                data:{
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    role:"EndUser",
                    points:0
                }
            })

            if(!secret){
                console.error("secret env variable not found")
                return
            }
            const token = jwt.sign({email:email, id:newUser.id}, secret, {expiresIn:"30d"})
            res.json({
                msg:"signed in",
                token
            })
        }
    } catch (e) {
        console.error("error : " + e)
        return;
    }

})

authUserRouter.post("/signin", signinMiddleware, async(req, res)=>{
    try{
        const {email, password} = req.body;
        const existingUser = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
    
        if(!secret){
            console.error("secret env variable not found")
            return
        }
    
        if(!existingUser){
            res.json({
                msg:"user not found redirect to signin page"
            })
        }
    
        if(existingUser && existingUser.email===email && existingUser.password===password){
            const token = jwt.sign({email:email, id:existingUser.id}, secret, {expiresIn:"30d"})
            res.json({
                msg:"logging you ",
                token
            })
        }
    
        if(existingUser && (existingUser.email!=email || existingUser.password!=password)){
            // const token = jwt.sign({email:email, id:existingUser.id}, secret, {expiresIn:"30d"})
            res.json({
                msg:"invalid credentials ",
            })
        }
    
    }
    catch(e){
        console.error("error: " + e )
        return
    }
    
})