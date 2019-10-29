const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

// router.get('/', (req, res) => res.render('welcome'));
router.get('/', function(req, res){
    res.sendFile('index.html');
});

router.get('/index', (req, res)=> res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.render('dashboard', {
        name: req.user.name
    })
);

module.exports = router;