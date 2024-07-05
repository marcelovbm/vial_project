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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __importDefault(require("../../domain/subject/Subject"));
const SubjectPrismaRepository_1 = __importDefault(require("./persistence/SubjectPrismaRepository"));
class SubjectPrismaGateway {
    constructor() {
        this.respository = new SubjectPrismaRepository_1.default();
    }
    findById(anId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.respository.findById(anId);
            if (result !== null) {
                return Subject_1.default.with(result.id, result.subject_name, result.sex, result.diagnosis_at, result.subject_status, result.created_at, result.updated_at);
            }
            return undefined;
        });
    }
    create(aSubject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.respository.create(aSubject);
            return aSubject;
        });
    }
    deleteById(anId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.respository.deleteById(anId);
        });
    }
    update(aSubject) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.respository.update(aSubject);
        });
    }
    findAll(aSearchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const subjectList = yield this.respository.get(aSearchQuery);
            const result = subjectList.map(subject => Subject_1.default.with(subject.id, subject.subject_name, subject.sex, subject.diagnosis_at, subject.subject_status, subject.created_at, subject.updated_at));
            return result;
        });
    }
    count(aSearchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.respository.count(aSearchQuery);
        });
    }
}
exports.default = SubjectPrismaGateway;
