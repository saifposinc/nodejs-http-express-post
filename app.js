const express = require('express');
const path = require('path');
const bp = require('body-parser');
const app = express();
app.use('/public',express.static(__dirname + 'static'));
app.use(bp.urlencoded({extended: false}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname , 'static' , 'index.html'));
});
app.post('/',(req,res)=>{
    console.log(req.body);
    // Database works here
    res.send('Data posted successfully');
});
app.listen('3000');