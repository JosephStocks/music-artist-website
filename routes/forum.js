const express = require("express");
const router = express.Router();

router.get("/forum", (req, res) => {
    res.render("forum", {
        pageTitle: "Tom Petty | Forum",
    });
});

module.exports = router;
