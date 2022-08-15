import { client } from './_mongoclient';

let db = client.db('IdeaCollab');

export { db };
