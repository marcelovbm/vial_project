import { PrismaClient, Subjects } from "@prisma/client";
import Subject from '../../../domain/subject/Subject';
import SearchQuery from "../../../domain/pagination/SearchQuery";

export default class SubjectPrismaRepository {

    #prisma: PrismaClient;

    constructor() {
        this.#prisma = new PrismaClient({
            log: ['query'],
          })
    }

    async create(aSubject: Subject): Promise<Subjects> {
        return await this.#prisma.subjects.create({
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
    }

    async deleteById(anId: string) {
        await this.#prisma.subjects.delete({
            where: {
                id: anId,
              }
        });
    }

    async findById(anId: string): Promise<Subjects | null> {
        return await this.#prisma.subjects.findFirst({
            where: {
                id: anId,
              }
        });
    } 

    async update(aSubject: Subject): Promise<Subject> {
        await this.#prisma.subjects.update({
            where: {
                id: aSubject.id,
              },
              data: {
                subject_name: aSubject.name,
                sex: aSubject.sex,
                diagnosis_at: aSubject.diagnosisAt.toISOString(),
                subject_status: aSubject.status,
                updated_at: aSubject.updatedAt?.toISOString()
              },
        });
        console.log(`[REPOSITORY] Subject updated sucessifuly`)
        return aSubject;
    }

    async get(aSearchQuery: SearchQuery): Promise<Subjects[]> {
        let skip = (parseInt(aSearchQuery.currentPage) - 1) * parseInt(aSearchQuery.take);
        let take = parseInt(aSearchQuery.take);
        const result = await this.#prisma.subjects.findMany({
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
    }

    async count(aSearchQuery: SearchQuery) : Promise<number> {
        return await this.#prisma.subjects.count({
            where: {
                subject_name: aSearchQuery.name,
                sex: aSearchQuery.sex,
                diagnosis_at: aSearchQuery.diagnosisAt,
                subject_status: aSearchQuery.status,
              },
        })
    }

    async getAllSubjectName(): Promise<{}> {
        return await this.#prisma.subjects.findMany({
            where: {},
            distinct: ['subject_name'],
            select: {
                subject_name: true
            }
        })
    }
}