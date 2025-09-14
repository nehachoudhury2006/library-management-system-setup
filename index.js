const express = require("express");

// const router = express.Router();


// importing the routes
const UserRouter = require("./routes/user");
const BooksRouter = require("./routes/book");


const app = express();
const PORT = 8081;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home page :-)"
  });
});

// use the routers
app.use("/user", UserRouter);
app.use("/book", BooksRouter);

app.listen(PORT, () => {
  console.log(`✅ Server is up and running on http://localhost:${PORT}`);
});
