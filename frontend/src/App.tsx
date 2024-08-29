import React from 'react';

import * as GetTodosBP from './blueprints/todos/get-todos';
import * as CreateTodoBP from './blueprints/todos/create-todo';
import { client } from './singletons/moopsy-client';

const App = React.memo(function App(): JSX.Element {
  const todosQuery = client.useQuery<GetTodosBP.Plug>(GetTodosBP, null);
  const createTodoMutation = client.useMutation<CreateTodoBP.Plug>(CreateTodoBP, { querySideEffects: [todosQuery] });
  const [value, setValue] = React.useState("");

  const submit = React.useCallback(() => {
    setValue("");
    createTodoMutation.call({ content: value });
  }, [createTodoMutation, value]);

  return (
    <div>
      <h1>It is not pretty, but it is Moopsy ('-')</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={submit}>Submit</button>
      <ul>
        {todosQuery.data?.todos.map((todo) => (
          <li key={todo.uuid}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
});

export default App;
