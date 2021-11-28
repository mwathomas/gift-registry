const router = require("express").Router();

const userRoutes = require("./userroutes");
const pickRoutes = require("./pickroutes");

router.use("/users", userRoutes);
router.use("/picks", pickRoutes);

module.exports = router;
