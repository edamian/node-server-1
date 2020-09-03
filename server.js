const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", router);

app.listen(3001, () => {
    console.log("Server listening on port 3001");
});