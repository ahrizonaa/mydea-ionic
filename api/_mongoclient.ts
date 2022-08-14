import { MongoClient, ServerApiVersion } from 'mongodb';
console.log(process.env.MONGO_DB_CONNECTION_STRING);
const client = new MongoClient(
  'mongodb+srv://princesslily:chokemedaddy69@charmee.vp0wy.mongodb.net/?retryWrites=true&w=majority',
  {
    serverApi: ServerApiVersion.v1,
  }
);

(async () => {
  await client.connect();
})();

export { client };
