const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const { application } = require("express");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    // the away to connect html pages to server is using send file
    res.sendFile(__dirname+"/signup.html")
});
app.post("/",function(req,res)
{
    var firstName=req.body.fname;
    var lastName=req.body.lname;
    var email=req.body.email;
    console.log(firstName,lastName,email);

});











app.listen(3000,function()
{
    console.log("Server running on 3000");
});