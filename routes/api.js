const express = require("express");
const router = express.Router();
const forumComments = require("../data/forum-comments.json");
const fs = require("fs");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get("/api", (req, res) => {
    res.json(forumComments);
});

router.post("/api", (req, res) => {
    //grab data form request - body-parser

    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;

    console.log(req.body);
    forumComments.unshift(req.body);
    //take current data add new object
    //[{name, title, message}, {},{}, {}]
    // unshift(new item)
    //write to the file feedbackData.json a new object

    fs.writeFile(
        "data/forum-comments.json",
        JSON.stringify(forumComments),
        "utf8",
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );

    //send back feedbackData

    res.json(forumComments);
});
module.exports = router;
