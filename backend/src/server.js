import app from "./app.js";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();
0

const PORT = process.env.PORT || 3000;

// Connect to DB and start the server
connectDB();
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
