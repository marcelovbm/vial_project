import { SexEnum, StatusEnum } from "@prisma/client";

export type SubjectDTO = {
    name: string;
    sex: SexEnum;
    diagnosisAt: Date;
    status: StatusEnum;
}