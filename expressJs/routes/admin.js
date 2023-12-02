const express = require('express');

const rootDir = require('../utils/root');

const path = require('path');

const router = express.Router();

//admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add_product.html'));
});

//admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;