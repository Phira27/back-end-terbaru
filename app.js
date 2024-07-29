require('dotenv').config();
const express = require("express");
const cors = require("cors");
const pasirianRouter = require('./src/routes/PasirianRoutes');
const lumajangRouter = require('./src/routes/LumajangRoutes');
const Pasirian = require('./src/insertmqtt/pasirian');
const senduroRouter = require('./src/routes/SenduroRoutes');
const Senduro = require('./src/insertmqtt/senduro');
const Lumajang = require('./src/insertmqtt/lumajang');

const port = process.env.PORT || 80;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(pasirianRouter);
app.use(lumajangRouter);
app.use(senduroRouter);

const monitor1 = new Lumajang();
const monitor2 = new Pasirian();
const monitor3 = new Senduro();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
