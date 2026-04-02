const express = require('express');
require('dotenv').config();
const cors=require('cors')
const connectDB=require('./src/config/db')
const postRoute=require('./src/routes/postRoute')

const app=express();
const port=process.env.PORT||4000

// connect to database
connectDB();
app.use(express.json());
app.use(cors());
app.use('/api/v1',postRoute)

app.listen(port,()=>{
    console.log(`app is listen on port number ${port}`);
})