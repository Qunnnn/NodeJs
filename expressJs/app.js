const express = require('express');

const app = express();

app.use('/',(req,res,next) => {
    console.log('This always run');
    next();
});

app.use('/add-product',(req,res,next) => {
    res.send('<h1>Hello from Add product page</h1>');  
    console.log('In the middleware');
});

app.use('/',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from ExpressJs</h1>');  
});

app.listen(3000);