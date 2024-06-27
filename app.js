const express = require("express");
const cors = require("cors");
const pasirianRouter = require('./src/routes/PasirianRoutes')
const lumajangRouter = require('./src/routes/LumajangRoutes')
const Pasirian = require('./src/insertmqtt/pasirian');
const senduroRouter = require('./src/routes/SenduroRoutes')

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(pasirianRouter);
app.use(lumajangRouter);
app.use(senduroRouter)

const monitor = new Pasirian();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
