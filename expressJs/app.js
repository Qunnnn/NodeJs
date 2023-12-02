const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}),);

app.use(shopRoutes);
app.use(adminRoutes);

app.listen(3000);

//This one for testing 