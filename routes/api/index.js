const router = require("express").Router();

const AuthRoutes = require("./AuthRoutes");

router.use("/auth", AuthRoutes);

module.exports = router;
