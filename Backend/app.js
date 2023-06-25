const express = require("express"),
  cors = require("cors"),
  db = require("./src/models/db"),
  appRoutes = require("./src/routes/appRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(appRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`running on port ${port}`));
