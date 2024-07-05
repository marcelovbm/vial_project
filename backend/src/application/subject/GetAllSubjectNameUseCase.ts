import SubjectGateway from "../../domain/subject/SubjectGateway";

export default class GetAllSubjectNameUseCase {

    constructor(readonly aGateway: SubjectGateway){}

    async execute() {
        return await this.aGateway.getAllSubjectName();
    }
}