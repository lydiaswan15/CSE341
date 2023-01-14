const dotenv = require("dotenv")

const {MongoClient} = require('mongodb');

dotenv.config()

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main() {
	// we'll add code here soon
  const client = new MongoClient(process.env.DB_URI);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
      console.error(e);
  }
  finally {
    await client.close();
  }
}

main().catch(console.error);