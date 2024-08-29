import { MongoClient } from 'mongodb';
import { TodoType } from '../types/todos/todo';

const uri = process.env.MONGO_URL;

if (uri == null) {
    throw new Error('MONGO_URL is not defined');
}

const client = new MongoClient(uri);

export const mongoDB = client.db('moopsydb');

export const TodosCollection = mongoDB.collection<TodoType>('todo');
