const express = require("express");
const Model = require("../models/model");

const router = express.Router();

//Post Method
router.post("/post", async (req, res) => {
  const data = await Model.create(req.body);
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  // test if works

  try {
    const data = await model.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  // ignore for now

  const question = new model({
    ImageLink: req.body.ImageLink,
    Name: req.body.Name,
    FunctionalGroup: req.body.FunctionalGroup,
    Difficulty: req.body.Difficulty,
  });
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
