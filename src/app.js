const express=require("express");
const app=express();
const fs= require("fs");
const path=require("path");
const hbs=require('hbs');  //when partials are used need to require so that it register partials
const port= process.env.PORT||5000;
const constPath=path.join(__dirname,"../public");
app.use(express.static(constPath));

const templatePath=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");


app.set("views",templatePath); 
app.set('view engine', 'hbs');   //hbs view engine used
hbs.registerPartials(partials_path);





app.get("/",(req,res)=>{
    res.render("ind");
});
app.get("/about",(req,res)=>{
    res.render("about");
});



app.get("/weather",(req,res)=>{
  res.render("weather");
});







app.get("*",(req,res)=>{
    res.render("404error", {
        errorMsg:'Oops! Page Not Found'
    });
});

app.listen(port,()=>{
    console.log(`port is running in ${port}`);
});
