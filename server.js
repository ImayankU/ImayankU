const express = require("express");
const bodyParser = require("body-parser");
const connectdB = require("./config/db");
const providerRoutes = require("./routes/providerRoutes");
const app = express();
const port = 4000;
connectdB();
app.use(bodyParser.json());
app.use("/api/providers", providerRoutes);
app.listen(port, () => {
    console.log("Server is running on ${port}")
});