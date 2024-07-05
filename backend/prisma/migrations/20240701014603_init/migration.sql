-- CreateEnum
CREATE TYPE "SexEnum" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('Screening', 'Enrolled', 'Failed');

-- CreateTable
CREATE TABLE "Subjects" (
    "id" VARCHAR(255) NOT NULL,
    "subject_name" VARCHAR(255) NOT NULL,
    "sex" "SexEnum" NOT NULL,
    "diagnosis_at" TIMESTAMP(6) NOT NULL,
    "subject_status" "StatusEnum" NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "Subjects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subjects_id_key" ON "Subjects"("id");
