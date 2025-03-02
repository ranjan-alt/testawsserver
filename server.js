const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Api is running fine now");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
