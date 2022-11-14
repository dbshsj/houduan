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
          let s1 =await db.user.findFirst({ 
               where:{
                    OR:[
                         {phone:loginInfo.account},
                         {email:loginInfo.account},
                         {name:loginInfo.account},
                         {id:loginInfo.account}
                    ]
               }
          })
          return s1
     } catch (error) {
          console.log(error)
     }
}

//更新user表中数据，找回密码
export async function userPasswordUpdata(findInfo){
    try {
     const s1 = await db.user.update({
          where:{
               id:findInfo.id 
               },
          data:{password:findInfo.new_password}
         })
     console.log(s1)
     return s1
    } catch (error) {
          console.log(error);
    }
}

//修改用户信息
export async function alterUserInfo(userInfo){
     try {
      const s1 = await db.user.update({
           where:{
                id:userInfo.account 
                },
           data:{password:userInfo.new_password,name:userInfo.name}
          })
     } catch (error) {
           console.log(error);
     }
 } 
//删除user表中所有数据
export async function deleteUser(){
     const s1 =await db.user.deleteMany({})
}

//发布帖子
export async function createPublishes(publishInfo){
     try {
          const s1 = await db.publish.create({
               data:{
                    title:publishInfo.title,
                    content:publishInfo.content
               }
          })
          return s1
     } catch (error) {
          
     }
}

//存储照片信息
export async function createImages(imageInfo){
     try {
          const s1 = db.image.create({
               data:{
                    name:imageId.name,
                    url:imageId.url,
                    user_id:imageId.user_id,
                    publish_id:imageId.publish_id,
                    base_id:imageId.base_id,
                    chat_id:imageId.chat_id
               }
          })
     } catch (error) {
          console.log(error);
     }
}

