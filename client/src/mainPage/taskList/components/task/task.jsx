import React from 'react';
import CompleteTask from '../completeTask/completeTask.jsx';

class Task extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <p>Username</p>
        <p>task text</p>
        <CompleteTask />
      </div>
    )
  }
}

export default Task;
