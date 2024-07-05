import Subject from "../subject/Subject";

export default class Pagination {
    constructor(
        public currentPage: number, 
        public perPage: number,
        public total: number,
        public data: Subject[]
    ) {}
}