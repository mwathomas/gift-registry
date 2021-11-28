const { Pick, User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => res.render("login"));

router.get("/:email", async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.email, {
      include: [
        {
          model: Pick,
          attributes: ["id", "title", "url", "user_email", "description"],
        },
      ],
    });
    const user = dbUserData.get({ plain: true });
    res.render("pick", { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
