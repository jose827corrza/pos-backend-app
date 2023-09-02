import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1693548273986 implements MigrationInterface {
  name = 'init1693548273986';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customer" ("id" SERIAL NOT NULL, "documentId" bigint NOT NULL, "nameLastname" character varying(120) NOT NULL, "mainAddress" character varying(160) NOT NULL, "optionalAddress" character varying(160) NOT NULL, "phoneNumber" bigint NOT NULL, "mobile" bigint NOT NULL, "email" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "mayor" character varying NOT NULL, CONSTRAINT "UQ_5984a2bb954943cdbdc9945293e" UNIQUE ("documentId"), CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "customer"`);
  }
}
