//导入路由模块
import express from "express"

//导入用户函数模块
import {regist, login, find, alterUser} from "./userFun.js"

//创建路由实例对象
const userRouter = express.Router()

userRouter.get('/user/:id',(req,res)=>{
    
})


userRouter.post('/login',login)


userRouter.post('/regist',regist)

userRouter.post('/find',find)

userRouter.put('/user/:id',alterUser)
//共享路由
export{
    userRouter
}
