const express = require("express");
const router = new express.Router();
const translate = require("@iamtraction/google-translate");

router.post("/translate", async (req, res) => {
  try {
    translate(req.body.text, {
      from: req.body.language,
      to: req.body.tolanguage,
    })
      .then((data) => {
        res.status(201).send(data)
      })
      .catch((err) => {
        res.status(401).send(err)
      });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
