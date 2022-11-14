import express from "express"
import { uploadMiddleware } from "../images/imageFun.js"

import { publish } from "./publishFun.js"

const publishRouter = express.Router()

publishRouter.get('/publish/:id',)

publishRouter.get('/list',)

publishRouter.post('/publish',publish)

publishRouter.put('/publish/:id',)

publishRouter.delete('/publish/:id',)

export{
    publishRouter
}