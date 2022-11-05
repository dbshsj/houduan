//注册错误处理
import { db } from "../utils/db.js";
import dayjs from "dayjs";
import { createUser } from "../posts.js"

export function regist(req,res){
    //设置状态码和提示信息变量
    const userInfo = req.body;
    if(!userInfo.phone||!userInfo.email||!userInfo.name||!userInfo.password){
        const s = {
            code:"500",
            message:"信息填写不全!",
            data:""
        }
        return res.send(s)
    }
    return createUser(userInfo).then((value)=>{
        res.send(value)
    })
}