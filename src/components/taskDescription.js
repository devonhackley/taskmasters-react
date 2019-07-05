import React from 'react';

function Description(props) {
  let task = props.task || "";
  if(task.assignee === null || task.assignee === "Admin") {
    task.assignee = "None";
  }
  return (
    <section>
        <div key={task.id}>
          <span>Assigned To: {task.assignee}</span>
          <span>{task.description}</span>
        </div>
    </section>
  )
}

export default Description;