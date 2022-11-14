//注册错误处理
import { db } from "../utils/db.js";
import dayjs from "dayjs";
import { createUser , accountVerification , userPasswordUpdata , alterUserInfo} from "../posts.js"

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
        if(value.password === loginInfo.password) {
            //使用session存储登录用户信息，不包括密码
            req.session.user = {id:value.id,name:value.name,phone:value.phone,email:value.email,create_time:value.created_time}
            req.session.isLogin = true
            return res.send({code:"200",message:"登录成功!",data:{id:value.id,name:value.name,phone:value.phone,email:value.email,create_time:value.created_time}});
            
        }
            return res.send({code:"500",message:"密码错误!",data:{}});
    })
}

//忘记密码，密码查找
export const find = async(req,res)=>{
    //通过查询，查找账号id
    const findInfo = req.body
    const registInfo1 = {account:findInfo.phone}
    const s1 =await accountVerification(registInfo1)
    if(s1) {
        const findInfo1 = {id:s1.id}
        const s3 =await userPasswordUpdata(findInfo1)
        return res.send({code:"200",message:"修改成功！!",data:{id:s3.id,name:s3.name,phone:s3.phone,email:s3.email,create_time:s3.created_time}});
    }
    const registInfo2 = {account:findInfo.email}
    const s2 =await accountVerification(registInfo2)
    if(s2) {
        const findInfo2 = {id:s2.id}
        const s4 =await userPasswordUpdata(findInfo2)
        return res.send({code:"200",message:"修改成功！!",data:{id:s4.id,name:s4.name,phone:s4.phone,email:s4.email,create_time:s4.created_time}});
    }
    if(!s2 && !s1) return res.send({code:"500",message:"该用户不存在!",data:{}});
}

//用户信息修改
export const alterUser = async(req,res)=>{
    const userId = req.params.id
    const userInfo1 = req.body
    const userInfo2 = {account:userId,name:userInfo1.name,new_password:userInfo1.new_password}
    const s1 = accountVerification(userInfo2)
    s1.then((value)=>{
        if(userInfo1.old_password === value.password) {
            alterUserInfo(userInfo2)
            return res.send({code:"200",message:"修改成功!",data:{id:value.id,name:userInfo1.name,phone:value.phone,email:value.email,create_time:value.created_time}});
        }
        return res.send({code:"500",message:"密码输入错误！",data:{}})
    })
}