const router = require("express").Router();
const { User, Pick } = require("../../models");

// GET all users
router.get("/search", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single users picks
router.get("/:user_email", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.user_email, {
      include: [{ model: Pick }],
    });

    if (!userData) {
      res.status(404).json({ message: "No user found with that email!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
