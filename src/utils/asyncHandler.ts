import { NextFunction,Request,Response } from "express"

const asynchandler = (requestHandler:any)=>{
    (req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{
            next(err)
        })
    }
}

export {asynchandler}