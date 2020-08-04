import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();//Dia
        table.integer('from').notNullable(); // Que horas começo a atender?
        table.integer('to').notNullable(); // Até que horas?

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}
