import path from 'path'
import multer from 'multer'
import mime from 'mime'
import {createImages} from "../posts.js"

let filename = ''

const __dirname = path.dirname('images')

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.join(__dirname,'./images/imagesArray'))
    },
    filename:function(req,file,cb){
        let ext = mime.getExtension(file.mimetype)
        filename = file.fieldname + '-' + Date.now() + '.' + ext
        cb(null,filename)
    }
})

export var upload = multer({storage}).array('file')

export const uploadMiddleware = (req,res,next)=>{
    upload(req,res,function (err) {
        if (err instanceof multer.MulterError) {
          // 发生错误
          console.log(err);
        } else if (err) {
          // 发生错误
          console.log(err);
        }
        // 一切都好
        next()
      })
}



export const image = async(req,res,next) =>{
  
  res.send({code:"200",message:"图片上传成功！",data:{}})
}