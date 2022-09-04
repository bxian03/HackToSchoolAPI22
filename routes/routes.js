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
    await Model.res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/organic_compounds/:id", async (req, res) => {
  // ignore for now
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/organic_compounds/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/organic_compounds/:id", (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id)
    res.json(data).status(200)
  } catch (error) {
    res.json().status(400)
  }
});

module.exports = router;
