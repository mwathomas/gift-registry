const { Pick, User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => res.render("login"));

router.get("/:email", async (req, res) => {
  try {
    const dbGalleryData = await User.findByPk(req.params.email, {
      include: [
        {
          model: Pick,
          attributes: ["title", "description", "url", "user_email"],
        },
      ],
    });

    const galleries = dbGalleryData.get((gallery) =>
      gallery.get({ plain: true })
    );

    res.render("picks", {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
