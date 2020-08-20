const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const tables = [
    {
        name: "Josh",
        phonenumber: "949-616-6008",
        email: "jshsandberg@gmail.com",
        id: "EAT",
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/reserved", function(req, res) {
    let newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})

