const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}),);

app.use('/add-product', (req, res, next) => {
    console.log(2),
    res.send('<form action = "/product" method="POST"><input type = "text" name ="title"><button type="submit">Add product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(4);
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log(3),
        res.send('<h1>Hello from ExpressJs</h1>');
});

app.listen(3000);

//This one for testing 