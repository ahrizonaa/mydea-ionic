import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING, {
  serverApi: ServerApiVersion.v1,
});

(async () => {
  await client.connect();
})();

export { client };
