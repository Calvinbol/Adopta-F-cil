const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// CONTROLA EL SIGN UP (DEJAR SESION)

const signUp = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1y'
    });

    console.log('Logged in successfully');
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send('>> Oops something went wrong, we could not sign you up.');
  }
};


// CONTROLA EL LOGING (INICIO SESION)

const logIn = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    const userDetails = {
      token: '',
      name: '',
    };
    if (user) {
      const result = bcrypt.compareSync(req.body.password, user.password);
      if (result) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
          expiresIn: '1y'
        });
        userDetails.token = token;
        userDetails.name = user.name;
        return res.status(200).json({ userDetails });
      }
      return res
        .status(400)
        .send('>> Oops something went wrong, user or password incorrect.');
    } else {
      return res
        .status(400)
        .send('>> Oops something went wrong, user or password incorrect.');
    }
  } catch (error) {
    return res
      .status(400)
      .send('>> Oops something went wrong, user or password incorrect.');
  }
};

module.exports = { signUp, logIn };
