const express = require("express");  
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

const convert = require(`./ed2`);

app.use(`/convert`, convert);

app.get("/test", (req,res) => { 
    let response = { 
        massage : "reamur",
        method: req.method, 
        code: res.statusCode 
        };

        res.json(response) 
        }); 


app.listen(8000, () => {
    console.log("Server run on port 8000");
});

