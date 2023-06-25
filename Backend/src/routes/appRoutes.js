const express = require("express"),
  router = express.Router(),
  carsController = require("../controller/carsController");

router.get("/", carsController.getHello);
router.post("/getCarsData", carsController.getCarsData);

module.exports = router;
