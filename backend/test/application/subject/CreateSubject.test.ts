import { SexEnum, StatusEnum } from "@prisma/client";
import SubjectInMemoryGateway from '../../../src/infrastructure/subject/SujectInMemoryGateway';
import CreateSubjectUseCase from "../../../src/application/subject/CreateSubjectUseCase";

test("Given a valid data, when tries to create subject, should return created data", async function () {
    const subjectInMemoryGateway = new SubjectInMemoryGateway();
    const createSubjectUseCase = new CreateSubjectUseCase(subjectInMemoryGateway);

    const expectedName = "Marcelo";
    const expectSex = SexEnum.MALE;
    const expectedDignosisAt = new Date();
    const expectedStatus = StatusEnum.Failed;

    const subject = await createSubjectUseCase.execute({name: expectedName, sex: expectSex, diagnosisAt: expectedDignosisAt, status: expectedStatus});

    expect(subject.id).toBeDefined();
    expect(subject.name).toBe(expectedName);
    expect(subject.sex).toBe(expectSex);
    expect(subject.diagnosisAt).toBe(expectedDignosisAt);
    expect(subject.status).toBe(expectedStatus);
    expect(subject.createdAt).toBeDefined();
    expect(subject.updatedAt).toBeNull();
});