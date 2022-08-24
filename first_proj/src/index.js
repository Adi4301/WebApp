const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express();
const port = process.env.PORT || 4000;


const pathfile = path.join(__dirname,"../public")
const viewsfiles = path.join(__dirname,"../templates/views")
const partialfiles = path.join(__dirname,"../templates/partials")

app.use(express.static(pathfile))

app.set("view engine","hbs");
app.set("views",viewsfiles);
hbs.registerPartials(partialfiles);

app.get("/",(req,res)=>{
    // res.render('index')
    res.send("Hi everone");
})


app.get("/weather",(req,res)=>{
    res.render('weather');
    // res.send("Weather")
})


app.get("*",(req,res)=>{
    res.render('error');
    // res.send("Other");
})

app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})
