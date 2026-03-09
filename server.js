import express from "express";
import router from "./routes/movieRoutes.js";
const app = express();

app.use("/api", router);

// create a port variable
const port = 3001;

// start the server
app.listen(port, () => console.log("Server listening on port: " + port));
