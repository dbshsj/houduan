//数据库操作模块
//引入db模块，数据库连接
import {db} from "./utils/db.js"
//用户注册
export async function createUser(userData){
   try{
        let s1 = await db.user.create({
        data:{
          name:userData.name,
          phone:userData.phone,
          email:userData.email,
          password:userData.password,
        }
       });
       const s2 = {
            code:"200",
            message:"注册成功！",
            data:s1
       }
        return s2
   }catch(err){
        console.log(err);
   }
}

//通过phone或email查找数据库中数据
export async function accountVerification(loginInfo){
     try {
          const p1 = db.user.findFirst({
               where:{phone:loginInfo.account}
          })
          const p2 = db.user.findFirst({
               where:{email:loginInfo.account}
          })
          const [s1,s2] = await Promise.all([p1,p2])
          if(s1 === null) return s2
          return s1
     } catch (error) {
          console.log(error);
     }
}

//删除user表中所有数据
export async function deleteUser(){
     const s1 =await db.user.deleteMany({})
}