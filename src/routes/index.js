const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    name: "jose",
    website: "none",
  };
  res.json(data);
});

module.exports = router;
