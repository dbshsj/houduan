import express from "express"
import { uploadMiddleware ,image} from "./imageFun.js"

const imageRouter = express.Router() 

imageRouter.post('/image',uploadMiddleware,image)

export{
    imageRouter
}