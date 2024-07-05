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
const Paginations_1 = __importDefault(require("../../domain/pagination/Paginations"));
class GetSubjectUseCase {
    constructor(aGateway) {
        this.aGateway = aGateway;
    }
    execute(aSearchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const total = yield this.aGateway.count(aSearchQuery);
            const subjectList = yield this.aGateway.findAll(aSearchQuery);
            return new Paginations_1.default(parseInt(aSearchQuery.currentPage), subjectList.length, Math.ceil(total / parseInt(aSearchQuery.take)), subjectList);
        });
    }
}
exports.default = GetSubjectUseCase;
