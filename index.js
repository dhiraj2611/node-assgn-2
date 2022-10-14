
const express = require("express");

 const app = express();
 app.get("/",(req, resp) =>{
    resp.send("hi,this is home page");
 });

 
 app.listen(5000, () => {
    console.log("listing the port at 50000");
 });