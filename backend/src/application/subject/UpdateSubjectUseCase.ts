import Subject from "../../domain/subject/Subject";
import SubjectGateway from "../../domain/subject/SubjectGateway";
import { SexEnum, StatusEnum } from '@prisma/client';

export default class UpdateSubjectUseCase {

    constructor(readonly aGateway: SubjectGateway) {}

    async execute(anId: string, input: SubjectDTO) : Promise<Subject | undefined> {
        const saved = await this.aGateway.findById(anId);
        if (!saved) {
            console.log(`[UPDATE] There is no subject with this id ${anId}`);
            return saved;
        }    
        const subject = Subject.with(saved.id, saved.name, saved.sex, saved.diagnosisAt, saved.status, saved.createdAt, saved.updatedAt);
        const result = subject.update(input.name, input.sex, input.diagnosisAt, input.status);
        this.aGateway.update(result);
        return result;
    } 
}

type SubjectDTO = {
    name?: string;
    sex?: SexEnum;
    diagnosisAt?: Date;
    status?: StatusEnum;
}