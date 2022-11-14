
import { createPublishes } from "../posts.js"

export const publish = async(req,res)=>{
    console.log(req.files);
    const publishInfo = req.body
    console.log(publishInfo);
    const s1 =await createPublishes(publishInfo)
    if(s1) return res.send({code:"200",message:"发布成功！",data:s1})
    res.send({code:"500",message:"发布失败！",data:{}})
}