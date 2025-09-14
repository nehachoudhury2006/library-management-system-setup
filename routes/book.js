const express = require("express");
const { book } = require("../data/book.json");   // अगर book.json में { "book": [ ... ] } है

const router = express.Router();

/**
 * route: /book
 * method: GET
 * description: get all books
 * access: public
 */
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: book,
  });
});

module.exports = router;

