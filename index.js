const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Niche server running successfully.");
});
app.listen(port, () => {
  console.log("Listening to port ", port);
});
