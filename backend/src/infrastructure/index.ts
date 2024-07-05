import dotenv from "dotenv";
import ExpressConfig from "./config/express/ExpressConfig";

dotenv.config();

const express = new ExpressConfig();
express.start();
