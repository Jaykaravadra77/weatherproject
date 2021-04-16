let express= require('express');
let path=require('path');
let hbs=require('hbs');
let port=process.env.PORT || 8000;

let staticPath=path.join(__dirname,"../static");
let templatePath=path.join(__dirname,"../templates/views");
let partialsPath=path.join(__dirname,"../templates/partials");
 
 
let app= express();
app.use(express.static(staticPath));
app.set('view engine',"hbs");
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

// app.get("/",(req,res)=>{
//         res.send("Hello I am Home Page of Weatherapp");
// })
app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.listen(port,()=>{
    console.log("Listen successfully");
})


