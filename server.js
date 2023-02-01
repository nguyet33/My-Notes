//Heroku port
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const noteRoutes = require("./controllers/noteController")
app.use("/api",noteRoutes)

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


//For HEROLU deployment, change 3000 to PORT
app.listen(PORT, function() {
    console.log("Listen on port" + PORT)
})
