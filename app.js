const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const tables = [

];

const waitlist = [
    
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

app.get("/api/tables", function(req, res) {
   return res.json(tables)
})

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist)
})

app.post("/reserved", function(req, res) {
    let newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT)
})

