const router = require("express").Router();
const airQualityRoutes = require("./air-quality-routes");

router.use("/", (req, res) => {
    res.send("API Hydra Mage Air Quality is Ready!")
})

router.use("/api", (req, res) => {
    res.send("API Hydra Mage Air Quality is Ready!")
})

router.use("/api", airQualityRoutes);


router.get('/data/airquality', airQualityRoutes.getAll);


module.exports = router;


