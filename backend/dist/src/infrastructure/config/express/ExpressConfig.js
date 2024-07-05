"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const SubjectAPI_1 = __importDefault(require("../../api/SubjectAPI"));
class ExpressConfig {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        this.app.disable('x-powered-by');
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use("/subject", new SubjectAPI_1.default().router);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}
exports.default = ExpressConfig;
