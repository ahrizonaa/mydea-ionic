import { client } from './_mongoclient';

let db = client.db('Mydeas');

export { db };
