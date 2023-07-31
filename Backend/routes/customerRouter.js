const router = require("express").Router();
const Customer = require("../models/CustomerModel");
const auth = require("../middleware/auth");
router.post("/", async (req, rees) => {
  try {
    const { name } = req.body;
    const newCustomer = new Customer({
      name,
    });
    const saveCustomer = await newCustomer.save();
    res.join(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router,
  get("/", auth, async (req, res) => {
    try {
      const customer = await Customer.find();
      res.json(customer);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
module.exports = router;
