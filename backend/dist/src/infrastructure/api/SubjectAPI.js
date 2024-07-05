"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const SubjectController_1 = __importDefault(require("./controller/SubjectController"));
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
class SubjectAPI {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new SubjectController_1.default();
        this.registerRoutes();
    }
    registerRoutes() {
        this.router.post('/', (req, res, next) => this.checkBodyCreate(req, res, next), (req, res) => this.controller.createSubject(req, res));
        this.router.get('/', (req, res) => this.controller.listSubjects(req, res));
        this.router.put('/:id', (req, res, next) => this.checkBodyUpdate(req, res, next), (req, res) => this.controller.updateSubject(req, res));
        this.router.delete('/:id', (req, res) => this.controller.deleteSubject(req, res));
    }
    checkBodyCreate(req, res, next) {
        const schema = joi_1.default.object().keys({
            name: joi_1.default.string().required(),
            sex: joi_1.default.string().valid(client_1.SexEnum.FEMALE, client_1.SexEnum.MALE).required(),
            diagnosisAt: joi_1.default.date().required(),
            status: joi_1.default.string().valid(client_1.StatusEnum.Enrolled, client_1.StatusEnum.Failed, client_1.StatusEnum.Screening).required(),
        }).options({ abortEarly: false });
        const { error } = schema.validate(req.body);
        if (error != null) {
            const errorMessage = error.details.map(i => i.message);
            res.status(400).send({ errorMessage });
        }
        else {
            next();
        }
    }
    checkBodyUpdate(req, res, next) {
        const schema = joi_1.default.object().keys({
            name: joi_1.default.string(),
            sex: joi_1.default.string().valid(client_1.SexEnum.FEMALE, client_1.SexEnum.MALE),
            diagnosisAt: joi_1.default.date(),
            status: joi_1.default.string().valid(client_1.StatusEnum.Enrolled, client_1.StatusEnum.Failed, client_1.StatusEnum.Screening),
        }).options({ abortEarly: false });
        const { error } = schema.validate(req.body);
        if (error != null) {
            const errorMessage = error.details.map(i => i.message);
            res.status(400).send({ errorMessage });
        }
        else {
            next();
        }
    }
}
exports.default = SubjectAPI;
