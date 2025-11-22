import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import testRoute from "./routes/testRoute.js";
import usersRoute from "./routes/usersRoute.js";
import criteresRoute from "./routes/criteresRoute.js";
import offresRoute from "./routes/offresRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/test", testRoute);
app.use("/api/users", usersRoute);
app.use("/api/criteres", criteresRoute);
app.use("/api/offres", offresRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Backend opérationnel sur le port " + PORT);
});
