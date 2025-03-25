import express from 'express';
import path from 'path';

const app = express();

const product =[
    {title:'iphone-15', price:75000},
    {title:'oneplus', price:12000},
    {title:'redmi y2', price:15000},
    {title:'Google pixel', price:16000},
]
//send response
app.get('/', (req,res)=>{
// res.json(
//     {message:"fetch all products",
//     jo_chahe:"de skte hai",
//     product:product,
//     success:true,
// })

// res.send('<h1>This is your sed response</h1>')


// res.download('./index.html'); //send JSON, HTML, HTML File in Responsive
const dir = path.resolve();
const url = path.join(dir, './index.html');
console.log("full path", url);
 res.sendFile(url);
})

const port = 1000;

app.listen(port, ()=>console.log(`Server is running on the port ${port}`))