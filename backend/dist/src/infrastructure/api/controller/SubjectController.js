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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _SubjectController_createSubjectUseCase, _SubjectController_deleteSubjectUseCase, _SubjectController_updateSubjectUserCase, _SubjectController_getSubjectUseCase;
Object.defineProperty(exports, "__esModule", { value: true });
const CreateSubjectUseCase_1 = __importDefault(require("../../../application/subject/CreateSubjectUseCase"));
const SubjectPrismaGateway_1 = __importDefault(require("../../subject/SubjectPrismaGateway"));
const DeleteSubjectUseCase_1 = __importDefault(require("../../../application/subject/DeleteSubjectUseCase"));
const UpdateSubjectUseCase_1 = __importDefault(require("../../../application/subject/UpdateSubjectUseCase"));
const GetSubjectUseCase_1 = __importDefault(require("../../../application/subject/GetSubjectUseCase"));
class SubjectController {
    constructor() {
        _SubjectController_createSubjectUseCase.set(this, void 0);
        _SubjectController_deleteSubjectUseCase.set(this, void 0);
        _SubjectController_updateSubjectUserCase.set(this, void 0);
        _SubjectController_getSubjectUseCase.set(this, void 0);
        __classPrivateFieldSet(this, _SubjectController_createSubjectUseCase, new CreateSubjectUseCase_1.default(new SubjectPrismaGateway_1.default()), "f");
        __classPrivateFieldSet(this, _SubjectController_deleteSubjectUseCase, new DeleteSubjectUseCase_1.default(new SubjectPrismaGateway_1.default()), "f");
        __classPrivateFieldSet(this, _SubjectController_updateSubjectUserCase, new UpdateSubjectUseCase_1.default(new SubjectPrismaGateway_1.default()), "f");
        __classPrivateFieldSet(this, _SubjectController_getSubjectUseCase, new GetSubjectUseCase_1.default(new SubjectPrismaGateway_1.default()), "f");
    }
    createSubject(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSubject = yield __classPrivateFieldGet(this, _SubjectController_createSubjectUseCase, "f").execute(request.body);
            response.status(201).json(newSubject);
        });
    }
    updateSubject(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedSubject = yield __classPrivateFieldGet(this, _SubjectController_updateSubjectUserCase, "f").execute(request.params.id, request.body);
            if (!updatedSubject) {
                response.status(400).send({ error: `There is no subject with this id ${request.params.id}` });
            }
            else {
                response.status(200).json(updatedSubject);
            }
        });
    }
    deleteSubject(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield __classPrivateFieldGet(this, _SubjectController_deleteSubjectUseCase, "f").execute(request.params.id);
            response.status(204).send();
        });
    }
    listSubjects(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchQuery = request.query;
            const result = yield __classPrivateFieldGet(this, _SubjectController_getSubjectUseCase, "f").execute(searchQuery);
            response.status(200).json(result);
        });
    }
}
_SubjectController_createSubjectUseCase = new WeakMap(), _SubjectController_deleteSubjectUseCase = new WeakMap(), _SubjectController_updateSubjectUserCase = new WeakMap(), _SubjectController_getSubjectUseCase = new WeakMap();
exports.default = SubjectController;
