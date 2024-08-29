import * as UUID from 'uuid';

import * as BP from '../../../blueprints/todos/create-todo';
import { TodosCollection } from '../../../singletons/mongo';
import { server } from '../../../singletons/moopsy-server';

server.endpoints.register<BP.Plug>(BP, async (params) => {
    await TodosCollection.insertOne({
        content: params.content,
        uuid: UUID.v4(),
    });
});
