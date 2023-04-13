const knex = require("knex");

const TABLE_NAME = "test";
const TEST_COUNT = 100;

async function main() {
  const knexInstance = knex({
    client: "pg",
    connection: "postgresql://postgres:postgres@localhost:5432/postgres",
  });
  
  const hasTable = await knexInstance.schema.hasTable(TABLE_NAME);
  if (!hasTable) {
    await knexInstance.schema.createTable(TABLE_NAME, (table) => {
      table.increments("id").primary();
      table.string("name");
    });
  }

  for (let i = 0; i < TEST_COUNT; i++) {
    await knexInstance.insert({ name: `test_${i}` }).into(TABLE_NAME);
  }

  const stream = knexInstance.select("*").from(TABLE_NAME).stream();
  for await (const item of stream) {    
    console.log("Item:", item);
  }

  knexInstance.destroy();
  console.log("done!");
}

main();
