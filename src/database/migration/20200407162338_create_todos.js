exports.up = function(knex) {
  return knex.schema.createTable('todoList', function (table){
      table.increments();
      table.string('tarefa').notNullable();
      table.string('status').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('todoList');
};
