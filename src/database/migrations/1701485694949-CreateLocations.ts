import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGeo1653233160791 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "locations",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'latitude',
                        type: 'varchar'
                    },
                    {
                        name: 'longitude',
                        type: 'varchar'
                    },
                    {
                        name: 'desc',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'delete_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],

                foreignKeys: [
                    {
                        name: "foreignKey-User",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["desc"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('locations')
    }

}