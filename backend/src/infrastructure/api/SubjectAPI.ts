import Joi from "joi";
import SearchQuery from "../../domain/pagination/SearchQuery";
import SubjectController from "./controller/SubjectController";
import express, { Router, Request, Response, NextFunction } from "express";
import { SexEnum, StatusEnum } from "@prisma/client";

export default class SubjectAPI {

    public router: Router;
    private controller: SubjectController;

    constructor() {
        this.router = express.Router();
        this.controller = new SubjectController();
        this.registerRoutes();
    }
    
    protected registerRoutes(): void {
        this.router.post('/', 
            (req: Request, res: Response, next: NextFunction) => this.checkBodyCreate(req, res, next), 
            (req: Request, res: Response) => this.controller.createSubject(req, res));
        this.router.get('/', (req: Request, res: Response) => this.controller.listSubjects(req, res));
        this.router.get('/names', (req: Request, res: Response) => this.controller.getAllSubjectName(req, res));
        this.router.put('/:id', 
            (req: Request, res: Response, next: NextFunction) => this.checkBodyUpdate(req, res, next), 
            (req: Request, res: Response) => this.controller.updateSubject(req, res));
        this.router.delete('/:id', (req: Request, res: Response) => this.controller.deleteSubject(req, res));
    }

    private checkBodyCreate(req: Request, res: Response, next: NextFunction) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            sex: Joi.string().valid(SexEnum.FEMALE, SexEnum.MALE).required(),
            diagnosisAt: Joi.date().required(),
            status: Joi.string().valid(StatusEnum.Enrolled, StatusEnum.Failed, StatusEnum.Screening).required(),
        }).options({abortEarly : false});
        const { error } = schema.validate(req.body);
        if (error != null) {
            const errorMessage = error.details.map(i => i.message);
            res.status(400).send({ errorMessage })
        } else {
            next();
        }
    }

    private checkBodyUpdate(req: Request, res: Response, next: NextFunction) {
        const schema = Joi.object().keys({
            name: Joi.string(),
            sex: Joi.string().valid(SexEnum.FEMALE, SexEnum.MALE),
            diagnosisAt: Joi.date(),
            status: Joi.string().valid(StatusEnum.Enrolled, StatusEnum.Failed, StatusEnum.Screening),
        }).options({abortEarly : false});
        const { error } = schema.validate(req.body);
        if (error != null) {
            const errorMessage = error.details.map(i => i.message);
            res.status(400).send({ errorMessage })
        } else {
            next();
        }
    }
}