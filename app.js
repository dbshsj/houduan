//引入模块
import express from "express"
import {userRouter} from "./users/user.js"

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/users',userRouter)


app.listen(80, () => {
    console.log('software running at http://127.0.0.1');
})