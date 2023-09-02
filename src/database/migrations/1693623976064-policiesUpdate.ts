import { MigrationInterface, QueryRunner } from 'typeorm';

export class policiesUpdate1693623976064 implements MigrationInterface {
  name = 'policiesUpdate1693623976064';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customer" DROP CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customer" ADD CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email")`,
    );
  }
}
