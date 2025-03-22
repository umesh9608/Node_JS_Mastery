import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send("you are requested for home page")
})


app.get('/srk', (req,res)=>{
    res.send("you are requested for srk page")
})
const port = 2000;
app.listen(port, ()=> console.log(`server is running on port ${port}`))