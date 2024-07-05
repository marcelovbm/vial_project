import { Request, Response } from "express";
import CreateSubjectUseCase from '../../../application/subject/CreateSubjectUseCase';
import DeleteSubjectUseCase from '../../../application/subject/DeleteSubjectUseCase';
import UpdateSubjectUseCase from "../../../application/subject/UpdateSubjectUseCase";
import GetSubjectUseCase from "../../../application/subject/GetSubjectUseCase";
import SearchQuery from "../../../domain/pagination/SearchQuery";
import GetAllSubjectNameUseCase from "../../../application/subject/GetAllSubjectNameUseCase";
import SubjectPrismaGateway from "../../subject/SubjectPrismaGateway";

export default class SubjectController {

    #createSubjectUseCase: CreateSubjectUseCase;
    #deleteSubjectUseCase: DeleteSubjectUseCase;
    #updateSubjectUserCase: UpdateSubjectUseCase;
    #getSubjectUseCase: GetSubjectUseCase;
    #getSubjectNameUseCase: GetAllSubjectNameUseCase;

    constructor() {
        this.#createSubjectUseCase = new CreateSubjectUseCase(new SubjectPrismaGateway());
        this.#deleteSubjectUseCase = new DeleteSubjectUseCase(new SubjectPrismaGateway());
        this.#updateSubjectUserCase = new UpdateSubjectUseCase(new SubjectPrismaGateway());
        this.#getSubjectUseCase = new GetSubjectUseCase(new SubjectPrismaGateway());
        this.#getSubjectNameUseCase = new GetAllSubjectNameUseCase(new SubjectPrismaGateway());
    }

    async createSubject (request: Request, response: Response) {
        const newSubject = await this.#createSubjectUseCase.execute(request.body);
        response.status(201).json(newSubject);
    }

    async updateSubject (request: Request, response: Response) {
        const updatedSubject = await this.#updateSubjectUserCase.execute(request.params.id, request.body);
        if (!updatedSubject) {
            response.status(400).send({ error: `There is no subject with this id ${request.params.id}`});
        } else {
            response.status(200).json(updatedSubject);
        }
    }

    async deleteSubject (request: Request, response: Response) {
        const result = await this.#deleteSubjectUseCase.execute(request.params.id)
        response.status(204).send();
    }

    async listSubjects (request: Request, response: Response) {
        const searchQuery = request.query as unknown as SearchQuery;
        const result = await this.#getSubjectUseCase.execute(searchQuery);
        response.status(200).json(result);
    }

    
    async getAllSubjectName (request: Request, response: Response) {
        const result = await this.#getSubjectNameUseCase.execute();
         response.status(200).json(result);
    }

}
