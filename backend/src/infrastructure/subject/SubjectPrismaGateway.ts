import Subject from '../../domain/subject/Subject';
import SearchQuery from '../../domain/pagination/SearchQuery';
import SubjectGateway from '../../domain/subject/SubjectGateway';
import SubjectPrismaRepository from './persistence/SubjectPrismaRepository';

export default class SubjectPrismaGateway implements SubjectGateway {

    private respository : SubjectPrismaRepository;

    constructor() {
        this.respository = new SubjectPrismaRepository();
    }

    async findById(anId: string): Promise<Subject | undefined> {
        const result = await this.respository.findById(anId);
        if (result !== null) {
            return Subject.with(result.id, result.subject_name, result.sex, result.diagnosis_at, result.subject_status, result.created_at, result.updated_at);
        }
        return undefined;
    }

    async create(aSubject: Subject): Promise<Subject> {
        await this.respository.create(aSubject);
        return aSubject;
    }

    async deleteById(anId: string): Promise<void> {
        return await this.respository.deleteById(anId);
    }

    async update(aSubject: Subject): Promise<Subject> {
        return this.respository.update(aSubject);
    }

    async findAll(aSearchQuery: SearchQuery): Promise<Subject[]> {
        const subjectList = await this.respository.get(aSearchQuery);
        const result = subjectList.map(subject => 
            Subject.with(subject.id, subject.subject_name, subject.sex, subject.diagnosis_at, subject.subject_status, subject.created_at, subject.updated_at))
        return result;
    }
    
    async count(aSearchQuery: SearchQuery): Promise<number> {
        return this.respository.count(aSearchQuery);
    }

    async getAllSubjectName(): Promise<{}> {
        return this.respository.getAllSubjectName();
    }
}