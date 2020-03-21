const express = require("express");
const namesModel = require("../db/models/names");
const router = express.Router();

router.get("/", (req, res, next) => {
  const names = namesModel.getNames();

  res.json(names);
});

router.post("/", (req, res, next) => {
  const name = req.body.name;

  if (name.length < 3) {
    return next({
      statusCode: 400,
      message: "Names must be at least 3 characters long"
    });
  }

  namesModel.addName(name);
  res.json({ message: `${name} added to database` });
});

module.exports = router;
