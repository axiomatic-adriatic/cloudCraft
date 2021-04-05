import React from 'react';
import CompleteTask from '../completeTask/completeTask';
import createDateTime from './task.util';
import styles from './task.css';
import axios from 'axios';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
  }

  handleDeleteTask(e) {
    const { task : { task_id }, getAllTasks } = this.props;
    console.log(task_id)
    axios.put(`/task/delete?task_id=${task_id}`)
      .then((resp) => {
        getAllTasks();
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleCompleteTask(task_id) {
    axios.put(`/task/complete?task_id=${task_id}`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { task } = this.props;
    return (
      <div className={styles.task}>
        <div className={styles.header}>
          <span
            className={styles.delete}
            onClick={this.handleDeleteTask}
            role="button"
            tabIndex="0"
            onKeyPress={this.handleDeleteTask}
          >
            &#10006;
          </span>
        </div>
        <div>{createDateTime(task.datetime)}</div>
        <p>{task.task_text}</p>
        <CompleteTask task={task} handleCompleteTask={this.handleCompleteTask} />
      </div>
    );
  }
}

export default Task;
