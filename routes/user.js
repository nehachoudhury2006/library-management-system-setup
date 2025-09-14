const express = require("express");
const { user } = require("../data/user.json");   // ../ क्योंकि routes folder के बाहर data है

const router = express.Router();

/**
 * route: /user
 * method: GET
 * description: get all users
 * access: public
 */
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * route: /user
 * method: POST
 * description: create a user
 * access: public
 */
router.post("/", (req, res) => {
  const { id, name, surname, email, subscriptiontype, subscriptionDate } = req.body;

  if (!id || !name || !email || !subscriptiontype || !subscriptionDate) {
    return res.status(400).json({
      success: false,
      message: "please provide all the required fields",
    });
  }

  const existingUser = user.find((each) => each.id === id);
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: `user Already Exist with the id: ${id}`,
    });
  }

  user.push({ id, name, surname, email, subscriptionDate, subscriptiontype });

  res.status(201).json({
    success: true,
    message: "user created Successfully",
  });
});

/**
 * route: /user/:id
 * method: PUT
 * description: update a user by ID
 * access: public
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const foundUser = user.find((each) => each.id == id);
  if (!foundUser) {
    return res.status(404).json({
      success: false,
      message: `user not found for this id: ${id}`,
    });
  }

  Object.assign(foundUser, data);

  res.status(200).json({
    success: true,
    message: "user updated successfully",
    data: foundUser,
  });
});

module.exports = router;

 