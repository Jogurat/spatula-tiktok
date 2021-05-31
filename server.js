const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const app = express();
const PORT = process.env.NODE_PORT || 4000;

app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
