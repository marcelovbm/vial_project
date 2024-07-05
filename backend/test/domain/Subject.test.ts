import { SexEnum, StatusEnum } from "@prisma/client";
import Subject from "../../src/domain/subject/Subject";

test("Should create a new Subject", async function () {
    const expectedName = "Marcelo";
    const expectSex = SexEnum.MALE;
    const expectedDignosisAt = new Date();
    const expectedStatus = StatusEnum.Failed;

    const newSubject = Subject.create(expectedName, expectSex, expectedDignosisAt, expectedStatus);

    expect(newSubject.id).toBeDefined();
    expect(newSubject.name).toBe(expectedName);
    expect(newSubject.sex).toBe(expectSex);
    expect(newSubject.diagnosisAt).toBe(expectedDignosisAt);
    expect(newSubject.status).toBe(expectedStatus);
    expect(newSubject.createdAt).toBeDefined();
    expect(newSubject.updatedAt).toBeNull();
});
