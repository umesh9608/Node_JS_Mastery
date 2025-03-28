import express from "express";

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{  //this is home route
    res.render('index.ejs');
})

app.post('/form-submit', (req,res)=>{  //this is form route
    console.log(req.body);
    res.json({
        message:'Form Submitted Successfully',
        sucess: true
    })
})

const port = 1000;

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});