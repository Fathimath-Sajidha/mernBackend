const express=require('express') 
const signupRoute=require('./routes/signupRoute');
const bodyParser=require('body-parser');
const cors=require("cors")

const app=express();
const PORT=process.env.PORT || 5000
app.use(express.json());

app.use(bodyParser.json());
app.use(cors())
app.use("/user",signupRoute);

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})
