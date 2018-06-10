const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const socketIo = require("socket.io");
const server = http.Server(app);
const io = socketIo(server);

const path = require("path");

const admin = require("./routes/admin");
const fileroute = require("./routes/file")(io);
const bodyParser = require("body-parser");

const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.connect(config.database);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected',()=>{
    console.log("database connected");
});
mongoose.connection.on('error',(err)=>{
    console.log("database Error" + err);
});
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname,"public")));
app.use('/admin',admin);
app.use('/file',fileroute);
app.use('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});
app.get('/', (req,res)=>{
    res.send("Invalid end point");
});
server.listen(port,() => {
    console.log("Server Started On Port " + port);
});