import Subject from "../../domain/subject/Subject";
import SubjectGateway from "../../domain/subject/SubjectGateway";
import { SubjectDTO } from "../../domain/subject/dto/SubjectRequestDTO";

export default class CreateSubjectUseCase {

    constructor(readonly aGateway: SubjectGateway) {}

    async execute(input: SubjectDTO): Promise<Subject> {
        const subject = Subject.create(input.name, input.sex, input.diagnosisAt, input.status);
        return await this.aGateway.create(subject);
    }

}
