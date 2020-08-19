var express = require('express')
const bodyParser = require('body-parser');

var app = express()
const data = require("./routs/rout")
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'mydb';  
let mongoose = require('mongoose')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(`mongodb://${server}/${database}`, { useMongoClient: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log(data)
app.use("/data",data)


app.listen(8000, () => {
    console.log("listining 8000 ")
});
