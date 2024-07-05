"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchQuery {
    constructor(currentPage, take, name, sex, diagnosisAt, status) {
        this.currentPage = currentPage;
        this.take = take;
        this.name = name;
        this.sex = sex;
        this.diagnosisAt = diagnosisAt;
        this.status = status;
    }
}
exports.default = SearchQuery;
