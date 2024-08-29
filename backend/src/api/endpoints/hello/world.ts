import * as BP from '../../../blueprints/hello/world';
import { server } from '../../../singletons/moopsy-server';

server.endpoints.register<BP.Plug>(BP, async (params) => {
    console.log('>>>', params.hello);

    return {
        world: new Date().toString()
    };
});
