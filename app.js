const express = require("express");
const path = require("path");

const app = expres();
const PORT = process.env.PORT || 80;

app.use(express.urelencoded({ extended: true}));
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

app.get("/reserved", function(req, res) {
    res.sendFile(path.join(__dirname, "reserved.html"));
});

app.post("/reserved", function(req, res) {
    let newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newCharacter);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})

