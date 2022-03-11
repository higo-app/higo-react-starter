import React, { useEffect, useState } from 'react';
import List from './components/List';
import Task from './components/Task';
import { List as ListType, Task as TaskType } from './types';

function App() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('https://higo-tasks-api.herokuapp.com/api/lists', {
      headers: {
        'X-User-Email': 'engineering@higo.io',
        'X-User-Token': 'DcuSSrQ8duf9ChABdRBa'
      }
    }).then((response) => response.json())
      .then((data) => setLists(data));
  })


  return (
    <div className="App">
      <h1>Good morning 👋</h1>
      {lists?.map((list: ListType) => (
        <List title={list.title}>
          {
            list.tasks.map((task: TaskType) => (
              <Task 
                title={task.title}
                checked={task.done}
                dueDate={task.due_date}
              />
            ))
          }
        </List>
      ))}
    </div>
  );
}

export default App;
