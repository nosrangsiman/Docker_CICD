const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/test/build')));

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/', (req,res)=>{
    res.send("Nos Rangsiman DEV");
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
})