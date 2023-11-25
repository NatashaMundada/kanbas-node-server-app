import express from 'express';
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js"
import "dotenv/config";
const app = express()
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}
  
));
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}


const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(
  session(sessionOptions)
);
app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000);