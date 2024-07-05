import Pagination from "../../domain/pagination/Paginations";
import SearchQuery from "../../domain/pagination/SearchQuery";
import SubjectGateway from "../../domain/subject/SubjectGateway";

export default class GetSubjectUseCase {

    constructor(readonly aGateway: SubjectGateway) {}

    async execute(aSearchQuery: SearchQuery): Promise<Pagination> {
        const total = await this.aGateway.count(aSearchQuery);
        const subjectList =  await this.aGateway.findAll(aSearchQuery);
        return new Pagination(parseInt(aSearchQuery.currentPage), subjectList.length, Math.ceil(total / parseInt(aSearchQuery.take)), subjectList);
    }

}
