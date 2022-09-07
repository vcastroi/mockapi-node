// Web Application Server
const express = require("express");
const cors = require("cors");
const routes = require("./app/routes");
const port = 8080;

const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/endpoint", routes);

app.get("/api/test", (req, res) => {
  res.send({ message: "Hello " + new Date() });
});

app.post("/api/test", (req, res) => {
  console.log("body " + JSON.stringify(req.body, null, 2));
  res.send({ message: "done" });
});

app.listen(port, function () {
  console.log("running mock api on http://localhost:" + port);
});
