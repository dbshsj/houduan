//引入模块
import express from "express";
import session from "express-session";
import {userRouter} from "./users/user.js";
import { imageRouter } from "./images/image.js";
import { publishRouter } from "./publishes/publish.js";
import { deleteUser } from "./posts.js";

const app = express();



app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret:'software houduan',
    resave:false,
    saveUninitialized:true
}))


app.use('/api/users',userRouter)
app.use('/api/images',imageRouter)
app.use('/api/publishes',publishRouter)

// deleteUser()

app.listen(80, () => {
    console.log('software running at http://127.0.0.1');
})