"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const ExpressConfig_1 = __importDefault(require("./config/express/ExpressConfig"));
dotenv_1.default.config();
const express = new ExpressConfig_1.default();
express.start();
