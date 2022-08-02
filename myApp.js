require("dotenv").config()
var bodyParser = require("body-parser")

let express = require('express');
let app = express();
//these first two lines create an express app object.
//several other ways to create an express app object tho.
//e.g: app.listen(port)

absolutePath = __dirname + "/views/index.html",
app.get("/", (req, res) =>{
    res.sendFile(absolutePath)
});

//call app.use after rest of file otherwise it will cause a HTTP 404.
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) =>{
    res.sendFile(absolutePath)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post("/name", (req, res) =>{
    const first = req.body.first;
    const last = req.body.last;
    res.json({name: `${first} ${last}`})
})



module.exports = app;
