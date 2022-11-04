//导入路由模块
import express from "express"
//导入数据库处理函数
import { createUser } from "../posts.js"

//创建路由实例对象
const userRouter = express.Router()

userRouter.get('/:id',(req,res)=>{
    
})


userRouter.post('/login',(req,res)=>{
    
})


userRouter.post('/regist',(req,res)=>{
    const s1 = createUser(req.body)
    s1.then((value)=>{
        res.send(value)
    })
})

userRouter.post('/find',(req,res)=>{
    
})

userRouter.put('/:id',(req,res)=>{
    
})
//共享路由
export{
    userRouter
}
