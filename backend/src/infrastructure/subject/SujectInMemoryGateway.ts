import SearchQuery from "../../domain/pagination/SearchQuery";
import Subject from "../../domain/subject/Subject";
import SubjectGateway from "../../domain/subject/SubjectGateway";

export default class SubjectInMemoryGateway implements SubjectGateway {

    private data = new Array<Subject>()

    constructor() {}

    async create(aSubject: Subject): Promise<Subject> {
        this.data.push(aSubject);
        return aSubject;
    }

    async deleteById(anId: string): Promise<void> {
        this.data = this.data.filter(subject => subject.id === anId);
    }

    async update(aSubject: Subject): Promise<Subject> {
        const subject = this.data.find(subject => subject.id === aSubject.id);
        subject?.update(aSubject.name, aSubject.sex, aSubject.diagnosisAt, aSubject.status);
        return aSubject;
    }

    async findAll(aSearchQuery: SearchQuery): Promise<Subject[]> {
        return this.data.filter(subject =>
                subject.name === aSearchQuery.name
                && subject.sex === aSearchQuery.sex
                && subject.diagnosisAt === aSearchQuery.diagnosisAt
                && subject.status === aSearchQuery.status)
    }

    async findById(anId: string): Promise<Subject | undefined> {
        return this.data.find(subject => subject.id === anId);
    }

    async count(aSearchQuery: SearchQuery): Promise<number> {
        return this.data.filter(subject =>
            subject.name === aSearchQuery.name
            && subject.sex === aSearchQuery.sex
            && subject.diagnosisAt === aSearchQuery.diagnosisAt
            && subject.status === aSearchQuery.status).length
    }

    getAllSubjectName(): Promise<{}> {
        throw new Error("Method not implemented.");
    }
}