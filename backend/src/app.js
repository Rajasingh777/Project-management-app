import express from "express";
import bodyParser from "body-parser";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", projectRoutes);

export default app;
