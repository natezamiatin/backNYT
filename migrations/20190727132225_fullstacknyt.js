
exports.up = function(knex) {
  return knex.schema.createTable('events', (table)=>{
    table.increments();
    table.string('title', 264)
    table.string('description', 264).notNullable()
    table.string('location').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};


