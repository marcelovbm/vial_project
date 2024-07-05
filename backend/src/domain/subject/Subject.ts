import { SexEnum, StatusEnum } from "@prisma/client";

export default class Subject {

    constructor(
        public id: string, 
        public name: string, 
        public sex: SexEnum, 
        public diagnosisAt: Date, 
        public status: StatusEnum,
        public createdAt: Date, 
        public updatedAt: Date | null) {}

    static create(aName: string, aSex: SexEnum, aDiagnosisAt: Date, aStatus: StatusEnum) : Subject {
        const id = crypto.randomUUID();
        const createdAt = new Date();
        return new Subject(id, aName, aSex, aDiagnosisAt, aStatus, createdAt, null);
    }

    static with(anId: string, aName: string, aSex: SexEnum, aDiagnosisAt: Date, aStatus: StatusEnum, aCreatedAt: Date, aUpdatedAt: Date | null) : Subject {
        return new Subject(anId, aName, aSex, aDiagnosisAt, aStatus, aCreatedAt, aUpdatedAt);
    }
    
    update (aName?: string, aSex?: SexEnum, aDiagnosisAt?: Date, aStatus?: StatusEnum) {
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