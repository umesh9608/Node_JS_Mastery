//this is called server side rendering

import express from 'express';
import path from 'path';// path module is used to resolve the path of the file 

const app = express();

app.use(express.static(path.join(path.resolve(),'public'))) // set the static file path
app.get('/', (req,res)=>{
    res.render('index.ejs');
})

const port = 1000;

app.listen(port,()=> console.log(`Server is running on port ${1000}`))