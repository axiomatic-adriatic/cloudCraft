import React from 'react';
import CompleteTask from '../completeTask/completeTask';
import createDateTime from './task.util';
import styles from './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { task } = this.props;
    return (
      <div className={styles.task}>
        <div className={styles.header}>
          <span>&#10006;</span>
        </div>
        <div>{createDateTime(task.datetime)}</div>
        <p>{task.task_text}</p>
        <CompleteTask />
      </div>
    )
  }
}

export default Task;
