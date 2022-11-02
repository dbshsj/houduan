//引入模块
import express from "express"
import {userRouter} from "./users/user.js"

const app = express();
app.use('/api/users',userRouter)


app.listen(3007, () => {
    console.log('software running at http://127.0.0.1:3007');
})