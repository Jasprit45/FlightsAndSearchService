const express = require("express");
const bodyParser = require("body-parser");


const {PORT} = require('./config/serverConfig');

const Cityrepository = require('./repository/city-repository')

const setupAndStartServer  = async() => {

    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async () => {
        console.log(`Server started at ${PORT}`);
        
       const repo = new Cityrepository();
       repo.createCity({name:"New delhi"});
    });
}


setupAndStartServer();
