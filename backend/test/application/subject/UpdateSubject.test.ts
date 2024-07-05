import { SexEnum, StatusEnum } from "@prisma/client";
import UpdateSubject from "../../../src/application/subject/UpdateSubjectUseCase";
import SubjectInMemoryGateway from "../../../src/infrastructure/subject/SujectInMemoryGateway";
import CreateSubjectUseCase from "../../../src/application/subject/CreateSubjectUseCase";

test("Given an Id and valida Data, When tries to update all subject, should update successifuly", async function () {
    const subjectInMemoryGateway = new SubjectInMemoryGateway();
    const createSubjectUseCase = new CreateSubjectUseCase(subjectInMemoryGateway);
    const updateSubject = new UpdateSubject(subjectInMemoryGateway);

    const expectedName = "Marcelo";
    const expectSex = SexEnum.MALE;
    const expectedDignosisAt = new Date();
    const expectedStatus = StatusEnum.Failed;
 
    const expectedSubject = await createSubjectUseCase.execute({name: expectedName, sex: expectSex, diagnosisAt: expectedDignosisAt, status: expectedStatus});
    const subject = await updateSubject.execute(expectedSubject.id, {name: expectedName, sex: expectSex, diagnosisAt: expectedDignosisAt, status: expectedStatus});

    expect(subject?.id).toBe(expectedSubject.id);
    expect(subject?.name).toBe(expectedName);
    expect(subject?.sex).toBe(expectSex);
    expect(subject?.diagnosisAt).toBe(expectedDignosisAt);
    expect(subject?.status).toBe(expectedStatus);
    expect(subject?.createdAt).toBeDefined();
    expect(subject?.updatedAt).toBeDefined();
})