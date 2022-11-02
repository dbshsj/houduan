//连接数据库

//引入插件
import { PrismaClient } from "@prisma/client"

//创建实例
const db = new PrismaClient

//连接数据库
db.$connect().catch((err)=>console.log(err))

//导出实例
export{
    db
}