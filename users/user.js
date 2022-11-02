//导入路由模块
import express from "express"

//创建路由实例对象
const userRouter = express.Router()

userRouter.get('/:id',(req,res)=>{
    res.send(req.params.id)
})


userRouter.post('/login',(req,res)=>{
    
})

userRouter.post('/regist',(req,res)=>{
    
})

userRouter.post('/find',(req,res)=>{
    
})

userRouter.put('/:id',(req,res)=>{
    
})
//共享路由
export{
    userRouter
}
