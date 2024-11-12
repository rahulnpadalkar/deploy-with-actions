const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Ready and set!" });
});

app.get("/hello", (req, res) => {
  res.send({ msg: "world" });
});

app.listen(8000, () => {
  console.log(`Server is running on 8000`);
});
