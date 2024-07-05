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
class UpdateSubjectUseCase {
    constructor(aGateway) {
        this.aGateway = aGateway;
    }
    execute(anId, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const saved = yield this.aGateway.findById(anId);
            if (!saved) {
                console.log(`[UPDATE] There is no subject with this id ${anId}`);
                return saved;
            }
            const subject = Subject_1.default.with(saved.id, saved.name, saved.sex, saved.diagnosisAt, saved.status, saved.createdAt, saved.updatedAt);
            const result = subject.update(input.name, input.sex, input.diagnosisAt, input.status);
            this.aGateway.update(result);
            return result;
        });
    }
}
exports.default = UpdateSubjectUseCase;
