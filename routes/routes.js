const express = require("express");
const Model = require("../models/model");

const router = express.Router();

//Post Method
router.post("/organic_compounds", async (req, res) => {
  try {
    const data = await Model.create(req.body);
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/organic_compounds", async (req, res) => {
  // works 4:05 pm
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by Difficulty Method // working 5:26pm
router.get("/organic_compounds/:id", async (req, res) => {
  const id = req.params.id;
  let dicts = await Model.find({ Difficulty: id });

  res.json(dicts);
});

//Update by ID Method
router.patch("/organic_compounds/:id", async (req, res) => {
  try {
    data = await Model.findByIdAndUpdate(req.params.id, {
      ImageLink: req.body.ImageLink,
      Name: req.body.Name,
      FunctionalGroup: req.body.FunctionalGroup,
      Difficulty: req.body.Difficulty,
    });
    res.json(data).status(200);
  } catch (error) {
    res.json(error).status(400);
  }
});

//Delete by ID Method
router.delete("/organic_compounds/:id", async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    res.json(data).status(200);
  } catch (error) {
    res.json().status(400);
  }
});

module.exports = router;
