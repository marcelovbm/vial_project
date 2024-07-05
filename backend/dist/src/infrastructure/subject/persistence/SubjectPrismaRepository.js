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
var _SubjectPrismaRepository_prisma;
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class SubjectPrismaRepository {
    constructor() {
        _SubjectPrismaRepository_prisma.set(this, void 0);
        __classPrivateFieldSet(this, _SubjectPrismaRepository_prisma, new client_1.PrismaClient({
            log: ['query'],
        }), "f");
    }
    create(aSubject) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _SubjectPrismaRepository_prisma, "f").subjects.create({
                data: {
                    id: aSubject.id,
                    subject_name: aSubject.name,
                    sex: aSubject.sex,
                    diagnosis_at: new Date(aSubject.diagnosisAt),
                    subject_status: aSubject.status,
                    created_at: aSubject.createdAt.toISOString(),
                    updated_at: aSubject.updatedAt
                }
            });
        });
    }
    deleteById(anId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _SubjectPrismaRepository_prisma, "f").subjects.delete({
                where: {
                    id: anId,
                }
            });
        });
    }
    findById(anId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _SubjectPrismaRepository_prisma, "f").subjects.findFirst({
                where: {
                    id: anId,
                }
            });
        });
    }
    update(aSubject) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield __classPrivateFieldGet(this, _SubjectPrismaRepository_prisma, "f").subjects.update({
                where: {
                    id: aSubject.id,
                },
                data: {
                    subject_name: aSubject.name,
                    sex: aSubject.sex,
                    diagnosis_at: aSubject.diagnosisAt.toISOString(),
                    subject_status: aSubject.status,
                    updated_at: (_a = aSubject.updatedAt) === null || _a === void 0 ? void 0 : _a.toISOString()
                },
            });
            console.log(`[REPOSITORY] Subject updated sucessifuly`);
            return aSubject;
        });
    }
    get(aSearchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            let skip = (parseInt(aSearchQuery.currentPage) - 1) * parseInt(aSearchQuery.take);
            let take = parseInt(aSearchQuery.take);
            const result = yield __classPrivateFieldGet(this, _SubjectPrismaRepository_prisma, "f").subjects.findMany({
                skip: skip,
                take: take,
                where: {
                    subject_name: aSearchQuery.name,
                    sex: aSearchQuery.sex,
                    diagnosis_at: aSearchQuery.diagnosisAt,
                    subject_status: aSearchQuery.status,
                },
                orderBy: {
                    created_at: 'asc',
                },
            });
            return result;
        });
    }
    count(aSearchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _SubjectPrismaRepository_prisma, "f").subjects.count({
                where: {
                    subject_name: aSearchQuery.name,
                    sex: aSearchQuery.sex,
                    diagnosis_at: aSearchQuery.diagnosisAt,
                    subject_status: aSearchQuery.status,
                },
            });
        });
    }
}
_SubjectPrismaRepository_prisma = new WeakMap();
exports.default = SubjectPrismaRepository;
