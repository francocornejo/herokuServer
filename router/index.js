const { Router } = require("express");

const router = Router();

router.get("/datos", (req, res) => {
  res.send(`Server fork`);
});

module.exports = router