import React, {useState, useEffect} from 'react';
import Description from './taskDescription';
import mockTasks from '../assets/mockTasks.json';

const API_URL = 'http://taskmaster-env.vnw2wvs5gu.us-east-2.elasticbeanstalk.com/tasks';
function Tasks(){
  const [tasks, setTasks] = useState([]);

  const _getTasks = () => {
    //  setTasks(mockTasks);
    //Helpful Resource: https://github.com/Rob--W/cors-anywhere/#documentation
    fetch(`https://cors-anywhere.herokuapp.com/${API_URL}`)
    .then( data => data.json() )
    .then( allTasks => setTasks(allTasks) )
    .catch(() => {
      // set dummy tasks
      setTasks(mockTasks);
      console.error();
    });
  }

  useEffect(_getTasks, []);

  return (
    <ul>
      {tasks.map( (task) =>
        <li key={task.id}>
          <details>
            <summary>
              <span>{!task.title ? 'Task Title' : task.title}</span>
            </summary>
            <Description task={task} />
          </details>
        </li>
      )}
    </ul>
  )
}

export default Tasks;