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
const UpdateSubjectUseCase_1 = __importDefault(require("../../../src/application/subject/UpdateSubjectUseCase"));
const SujectInMemoryGateway_1 = __importDefault(require("../../../src/infrastructure/subject/SujectInMemoryGateway"));
const CreateSubjectUseCase_1 = __importDefault(require("../../../src/application/subject/CreateSubjectUseCase"));
test("Given an Id and valida Data, When tries to update all subject, should update successifuly", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const subjectInMemoryGateway = new SujectInMemoryGateway_1.default();
        const createSubjectUseCase = new CreateSubjectUseCase_1.default(subjectInMemoryGateway);
        const updateSubject = new UpdateSubjectUseCase_1.default(subjectInMemoryGateway);
        const expectedName = "Marcelo";
        const expectSex = client_1.SexEnum.MALE;
        const expectedDignosisAt = new Date();
        const expectedStatus = client_1.StatusEnum.Failed;
        const expectedSubject = yield createSubjectUseCase.execute({ name: expectedName, sex: expectSex, diagnosisAt: expectedDignosisAt, status: expectedStatus });
        const subject = yield updateSubject.execute(expectedSubject.id, { name: expectedName, sex: expectSex, diagnosisAt: expectedDignosisAt, status: expectedStatus });
        expect(subject === null || subject === void 0 ? void 0 : subject.id).toBe(expectedSubject.id);
        expect(subject === null || subject === void 0 ? void 0 : subject.name).toBe(expectedName);
        expect(subject === null || subject === void 0 ? void 0 : subject.sex).toBe(expectSex);
        expect(subject === null || subject === void 0 ? void 0 : subject.diagnosisAt).toBe(expectedDignosisAt);
        expect(subject === null || subject === void 0 ? void 0 : subject.status).toBe(expectedStatus);
        expect(subject === null || subject === void 0 ? void 0 : subject.createdAt).toBeDefined();
        expect(subject === null || subject === void 0 ? void 0 : subject.updatedAt).toBeDefined();
    });
});
