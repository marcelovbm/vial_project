"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagination {
    constructor(currentPage, perPage, total, data) {
        this.currentPage = currentPage;
        this.perPage = perPage;
        this.total = total;
        this.data = data;
    }
}
exports.default = Pagination;
