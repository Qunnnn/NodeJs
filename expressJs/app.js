const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/errorRoute');

app.use(bodyParser.urlencoded({extended: true}),);
app.use(express.static(path.join(__dirname,'public')));

app.use(shopRoutes);    
app.use('/admin',adminRoutes.routes);
app.use(errorRoutes);

app.listen(3000);
