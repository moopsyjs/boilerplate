import React from 'react';

import * as HelloWorldBP from './blueprints/hello/world';
import { client } from './singletons/moopsy-client';

const App = React.memo(function App(): JSX.Element {
  const helloWorldMutation = client.useMutation<HelloWorldBP.Plug>(HelloWorldBP);
  const [value, setValue] = React.useState("");
  const [response, setResponse] = React.useState<HelloWorldBP.ResponseType | null>(null);

  const submit = React.useCallback(() => {
    setValue("");
    helloWorldMutation.call({ hello: value }).then((res) => {
      setResponse(res);
    });
  }, [value]);

  return (
    <div>
      <h1>It is not pretty, but it is Moopsy ('-')</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={submit}>Submit</button>
      {response != null ?
        <div style={{ color: "green" }}>{response.world}</div>
        : null}
    </div>
  );
});

export default App;
