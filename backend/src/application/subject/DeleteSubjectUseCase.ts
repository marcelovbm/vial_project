import SubjectGateway from "../../domain/subject/SubjectGateway";

export default class DeleteSubjectUseCase {

    constructor(readonly aGateway: SubjectGateway) {}

    async execute(anId: string) :Promise<void> {
       if (anId === undefined) { return; }
        const record = await this.aGateway.findById(anId);
        if (record === undefined) { return; }

        this.aGateway.deleteById(anId);
    }
}