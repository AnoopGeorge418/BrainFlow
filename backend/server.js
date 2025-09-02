import express from "express";
import bodyParser from "./src/middleware/bodyParser.js";
import { PORT } from "./src/configs/env.js";
// import userRouter from "./src/routes/userRoutes.js"

// Initilizing the express
const app = express();

// Using middlewares
app.use(bodyParser);

// Using routes
// app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})
