//导入路由模块
import express from "express"

//导入数据库处理函数
import { createUser } from "../posts.js"

//导入用户函数模块
import {regist, login} from "./userFun.js"

//创建路由实例对象
const userRouter = express.Router()

userRouter.get('/user/:id',(req,res)=>{
    
})


userRouter.post('/login',login)


userRouter.post('/regist',regist)

userRouter.post('/find',(req,res)=>{
    
})

userRouter.put('/user/:id',(req,res)=>{
    
})
//共享路由
export{
    userRouter
}
