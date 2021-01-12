const express = require("express");
const router = express.Router();

router.get("/forum", (req, res) => {
    res.render("forum", {
        pageTitle: "Forum",
    });
});

module.exports = router;
