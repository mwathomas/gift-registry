const router = require("express").Router();
const { User, Pick } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const dbPickData = await Pick.create({
      title: req.body.title,
      url: req.body.url,
      description: req.body.description,
    });
    res.status(200).json(dbPickData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
