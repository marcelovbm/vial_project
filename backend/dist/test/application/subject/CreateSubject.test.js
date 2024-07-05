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
const client_1 = require("@prisma/client");
const SujectInMemoryGateway_1 = __importDefault(require("../../../src/infrastructure/subject/SujectInMemoryGateway"));
const CreateSubjectUseCase_1 = __importDefault(require("../../../src/application/subject/CreateSubjectUseCase"));
test("Given a valid data, when tries to create subject, should return created data", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const subjectInMemoryGateway = new SujectInMemoryGateway_1.default();
        const createSubjectUseCase = new CreateSubjectUseCase_1.default(subjectInMemoryGateway);
        const expectedName = "Marcelo";
        const expectSex = client_1.SexEnum.MALE;
        const expectedDignosisAt = new Date();
        const expectedStatus = client_1.StatusEnum.Failed;
        const subject = yield createSubjectUseCase.execute({ name: expectedName, sex: expectSex, diagnosisAt: expectedDignosisAt, status: expectedStatus });
        expect(subject.id).toBeDefined();
        expect(subject.name).toBe(expectedName);
        expect(subject.sex).toBe(expectSex);
        expect(subject.diagnosisAt).toBe(expectedDignosisAt);
        expect(subject.status).toBe(expectedStatus);
        expect(subject.createdAt).toBeDefined();
        expect(subject.updatedAt).toBeNull();
    });
});
