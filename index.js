const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mainPath = "/api/";
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");
const orderRoute = require("./src/routes/orderRoute");
const orderDetailRoute = require("./src/routes/orderDetailRoute");
const paymentRoute = require("./src/routes/paymentRoute");
const paymentDetailRoute = require("./src/routes/paymentDetailRoute");

app.use(mainPath, userRoute);
app.use(mainPath, productRoute);
app.use(mainPath, orderRoute);
app.use(mainPath, orderDetailRoute);
app.use(mainPath, paymentRoute);
app.use(mainPath, paymentDetailRoute);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
