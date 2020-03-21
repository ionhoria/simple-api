const express = require("express"); //commonJS
const namesRouter = require("./routes/names");

const PORT = 5000;

const app = express();

app.use(express.json()); // imi adauga req.body de tip JSON

// am ceva care la req imi adauga req.user
app.use((req, res, next) => {
  req.user = { name: "Gigel", role: "admin" };
  next();
});

app.use("/names", namesRouter);

// catch all error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 400);
  res.send(err.message);
});

app.listen(PORT);
