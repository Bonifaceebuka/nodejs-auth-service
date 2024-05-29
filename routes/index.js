const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");

const { isProduction } = require("../config");

/* GET home page. */
router.get("/", (req, res, next) =>
  res.status(200).json({
    success: true,
    message: "This service is operational",
  })
);

router.use("/api", apiRoutes);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  const err = new Error("Route does not exist");
  err.status = 404;
  next(err);
});

// error handler
router.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Something happened",
    stack: isProduction ? undefined : err.stack,
  });
});

module.exports = router;
