const express = require('express');
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4}=require("uuid");

router.get("/notes", (req, res) => {
    fs.readFile(__dirname + "/../db/db.json", (err, data) => {
      if (err) {
        res.status(500).send("oh no!");
        throw err;
      } else {
        const notesData = JSON.parse(data);
        res.json(notesData);
      }
    });
  });

  router.post("/notes", (req, res) => {
    fs.readFile(__dirname + "/../db/db.json", (err, data) => {
      if (err) {
        res.status(500).send("oh no!");
        throw err;
      } else {
        const notesData = JSON.parse(data);
        const newNote = {
          title:req.body.title,
          text:req.body.text,
          note_id: uuidv4(),
        };
        notesData.push(newNote);
        fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notesData, null, 4), (err) => {
          if (err) {
            res.status(500).send("oh no!");
            throw err;
          } else {
            res.send("Notes Taken!");
          }
        });
      }
    });
  });

module.exports = router;