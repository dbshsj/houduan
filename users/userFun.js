//注册错误处理
import { db } from "../utils/db.js";
import dayjs from "dayjs";
import { createUser , accountVerification } from "../posts.js"

//注册函数
export  const regist = async (req,res) => {
    //设置状态码和提示信息变量
    const userInfo = req.body;

    //检查是否存在未填项
    if(!userInfo.phone||!userInfo.email||!userInfo.name||!userInfo.password){
        const s = {
            code:"500",
            message:"信息填写不全!",
            data:{
            }
        }
        return res.send(s)
    }
    
    const registInfo1 = {account:userInfo.phone}
    const s1 =await accountVerification(registInfo1)
    if(s1) return res.send({code:"500",message:"电话已注册!",data:{}});
    const registInfo2 = {account:userInfo.email}
    const s2 =await accountVerification(registInfo2)
    if(s2) return res.send({code:"500",message:"邮箱已注册!",data:{}});
    const registInfo3 = {account:userInfo.name}
    const s3 =await accountVerification(registInfo3)
    if(s3) return res.send({code:"500",message:"昵称已注册!",data:{}});
    //注册成功
    return createUser(userInfo).then((value)=>{
        res.send(value)
    })
}

//登录函数
export const login = async(req,res)=>{
    const loginInfo = req.body;
    const s1 = accountVerification(loginInfo)
    s1.then((value)=>{
        if(value === null) return res.send({code:"500",message:"账号错误!",data:{}});
        if(value.password === loginInfo.password) return res.send({code:"500",message:"登录成功!",data:{id:value.id,name:value.name,phone:value.phone,email:value.email,create_time:value.created_time}});
        return res.send({code:"500",message:"密码错误!",data:{}});
    })
}