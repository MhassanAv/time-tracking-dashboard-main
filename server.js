const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app'));

const port = 8000;
const server = app.listen(port,()=>{
    console.log('server is running');
    console.log(`running on localhost:${port}`);
});
let data = require("./app/data.json");
console.log(data);

app.get("/",(req, res)=>{
    res.send(data);
});
