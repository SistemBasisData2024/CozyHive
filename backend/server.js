const express = require ("express");
const app = express ();
const connector = require ("./connectdb/connector.js");
const PORT = process.env.PORT;
const route = require("./route.js");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connector.connectDB();
app.use(route);

app.listen(PORT, () => {
    console.info("Server is running on port", PORT);
});