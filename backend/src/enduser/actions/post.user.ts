import Router from "express"
import { verifyJWT } from "../../middleware/auth.middleware"
import { PrismaClient } from "@prisma/client"

export const postUserRouter = Router()
const prisma = new PrismaClient()

postUserRouter.post("/scanQR", verifyJWT, async (req, res) => {
    try {
        const { CID } = req.body
        const charginStation = await prisma.chargingStation.findUnique({
            where: {
                id: CID
            }
        })

        if(charginStation && charginStation.id==CID){
            const connectChargingStation = await prisma.chargingStation.create({
                
            })
        }
    } catch (e) {
        console.log("error found: "+e)
        return
    }

})