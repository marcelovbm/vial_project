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
const Subject_1 = __importDefault(require("../../src/domain/subject/Subject"));
test("Should create a new Subject", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const expectedName = "Marcelo";
        const expectSex = client_1.SexEnum.MALE;
        const expectedDignosisAt = new Date();
        const expectedStatus = client_1.StatusEnum.Failed;
        const newSubject = Subject_1.default.create(expectedName, expectSex, expectedDignosisAt, expectedStatus);
        expect(newSubject.id).toBeDefined();
        expect(newSubject.name).toBe(expectedName);
        expect(newSubject.sex).toBe(expectSex);
        expect(newSubject.diagnosisAt).toBe(expectedDignosisAt);
        expect(newSubject.status).toBe(expectedStatus);
        expect(newSubject.createdAt).toBeDefined();
        expect(newSubject.updatedAt).toBeNull();
    });
});
