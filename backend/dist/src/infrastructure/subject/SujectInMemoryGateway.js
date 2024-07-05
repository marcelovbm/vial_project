"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class SubjectInMemoryGateway {
    constructor() {
        this.data = new Array();
    }
    create(aSubject) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data.push(aSubject);
            return aSubject;
        });
    }
    deleteById(anId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = this.data.filter(subject => subject.id === anId);
        });
    }
    update(aSubject) {
        return __awaiter(this, void 0, void 0, function* () {
            const subject = this.data.find(subject => subject.id === aSubject.id);
            subject === null || subject === void 0 ? void 0 : subject.update(aSubject.name, aSubject.sex, aSubject.diagnosisAt, aSubject.status);
            return aSubject;
        });
    }
    findAll(aSearchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.filter(subject => subject.name === aSearchQuery.name
                && subject.sex === aSearchQuery.sex
                && subject.diagnosisAt === aSearchQuery.diagnosisAt
                && subject.status === aSearchQuery.status);
        });
    }
    findById(anId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.find(subject => subject.id === anId);
        });
    }
    count(aSearchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.filter(subject => subject.name === aSearchQuery.name
                && subject.sex === aSearchQuery.sex
                && subject.diagnosisAt === aSearchQuery.diagnosisAt
                && subject.status === aSearchQuery.status).length;
        });
    }
}
exports.default = SubjectInMemoryGateway;
