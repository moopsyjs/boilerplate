import * as BP from '../../../blueprints/todos/get-todos';
import { TodosCollection } from '../../../singletons/mongo';
import { server } from '../../../singletons/moopsy-server';

server.endpoints.register<BP.Plug>(BP, async (params) => {
    const todos = await TodosCollection.find({}).toArray();
    return { todos };
});
