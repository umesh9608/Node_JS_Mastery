import express from 'express';

const app = express();
//C = Create => POST(method)
//R = Read => GET(method)
//U = Update => PUT(method)
//D = Delete => DELETE(method)

app.get('/suman', (req,res) =>{
    res.send("This is response from get method")
})

app.post('/instagram_post', (req,res)=>{

})
const port = 2000;

app.listen(port, () => (`server is running on port ${port}`))