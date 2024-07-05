import { SexEnum, StatusEnum } from '@prisma/client';

export default class SearchQuery {
    constructor(public currentPage: string,
        public take: string,
        public name?: string,
        public sex?: SexEnum,
        public diagnosisAt?: Date,
        public status?: StatusEnum){}
}