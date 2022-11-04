//数据库操作模块
//引入db模块，数据库连接
import {db} from "./utils/db.js"

//用户注册
export async function createUser(userData){
   try{
        let s1 = await db.user.create({
        data:{
            name:"1",
            phone:userData.phone,
            email:userData.email,
            password:userData.password
        }
       });
       const s2 = {
            code:"200",
            message:"注册成功！",
            data:s1
       }
        return new Promise((resolve,reject)=>{
            resolve(s2);
        })
   }catch(err){
        console.log(err);

   }
}