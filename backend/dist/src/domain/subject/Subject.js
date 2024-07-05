"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(id, name, sex, diagnosisAt, status, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.diagnosisAt = diagnosisAt;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static create(aName, aSex, aDiagnosisAt, aStatus) {
        const id = crypto.randomUUID();
        const createdAt = new Date();
        return new Subject(id, aName, aSex, aDiagnosisAt, aStatus, createdAt, null);
    }
    static with(anId, aName, aSex, aDiagnosisAt, aStatus, aCreatedAt, aUpdatedAt) {
        return new Subject(anId, aName, aSex, aDiagnosisAt, aStatus, aCreatedAt, aUpdatedAt);
    }
    update(aName, aSex, aDiagnosisAt, aStatus) {
        if (aName !== undefined) {
            this.name = aName;
        }
        if (aSex !== undefined) {
            this.sex = aSex;
        }
        if (aDiagnosisAt !== undefined) {
            this.diagnosisAt = aDiagnosisAt;
        }
        if (aStatus !== undefined) {
            this.status = aStatus;
        }
        this.updatedAt = new Date();
        return this;
    }
}
exports.default = Subject;
