import SearchQuery from '../pagination/SearchQuery';
import Subject from './Subject';

export default interface SubjectGateway {

    create(aSubject: Subject) : Promise<Subject>;

    deleteById(anId: string) : Promise<void>;

    update(aSubject: Subject) : Promise<Subject>;

    findAll(aSearchQuery: SearchQuery) : Promise<Subject[]>;

    findById(anId: string) : Promise<Subject | undefined>;

    count(aSearchQuery: SearchQuery) : Promise<number>;

    getAllSubjectName() : Promise<{}>;
}