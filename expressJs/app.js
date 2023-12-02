const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/errorRoute');

app.use(bodyParser.urlencoded({extended: true}),);

app.use(shopRoutes);    
app.use('/admin',adminRoutes);
app.use(errorRoutes);

app.listen(3000);
