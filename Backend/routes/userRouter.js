const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
