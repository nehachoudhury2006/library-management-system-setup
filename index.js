const express = require("express");

const app = express();
const PORT = 8081;

app.use(express.json());

// Normal route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home page :-)"
  });
});

// Catch-all middleware for undefined routes
app.use((req, res) => {
  res.status(404).json({
    message: "Not built yet"
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
