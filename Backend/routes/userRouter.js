const router = require("express").Router();
const User = require("../models/usermodel");
const bcrypt = required("bcrypt");
router.post("/", async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    if (!email || !password || !passwordVerify)
      return res
        .status(404)
        .json({ errorMessage: "Please entyer all requird fields" });

    if (password.length < 6)
      return res
        .status(404)
        .json({ errorMessage: "Please enter password at least 6 characters" });

    if (password !== passwordVerify)
      return res
        .status(404)
        .json({ errorMessage: "Please enter the same passsword twice" });

    const existingUser = User.findone({ email });
    if (existingUser)
      return res
        .status(404)
        .json({ errorMessage: "An account with this email aready exists" });
    console.log(existingUser);

    //  hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db
    const newUser = new User({
      email,
      passwordHash,
    });

    const saveUser = await newUser.save();

    // sign the token
    const token = jwt.sign(
      {
        user: saveUser,
        _id,
      },
      process.env.JWT_SECRET
    );

    // send the token cookie
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  try {
    const { emnail, password } = req.body;

    // validate
    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Plese enter all requiored fields" });

    const existUser = await User.findOne({ email });
    if (!existngUser)
      return res.status(400).json({ errormeassage: "Wrong email or password" });

    const passwordCorrect = await bycrypt.compare(
      password,
      existingUser.passwordHash
    );
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
router.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
});
module.exports = router;
