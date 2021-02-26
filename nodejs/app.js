const express = require("express");
const path = require("path");

const app = new express();
const port = 80;

app.get("/", function (request, response) {
  const appRoot = path.resolve(__dirname);
  response.sendFile(appRoot + "/templates/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
