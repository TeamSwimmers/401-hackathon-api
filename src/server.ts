import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { AuthRouter } from "./auth/auth";
import { DbApiRouter } from "./db-api/db-api";

const app = express();

// INITIAL MIDDLEWARE
// TODO: Add public origin to CORS using DB
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// LOGGING MIDDLEWARE
app.use(morgan("dev"));

// ROUTES
app.use("/auth", AuthRouter);
app.use("/api", DbApiRouter);

app.listen(4000);
