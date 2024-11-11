const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Ready" });
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
