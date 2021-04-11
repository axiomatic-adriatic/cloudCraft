import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CompleteTask from '../completeTask/completeTask';
import createDateTime from './task.util';
import styles from './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
  }

  handleDeleteTask(e) {
    const { task : { task_id }, getAllTasks } = this.props;
    axios.put(`/task/delete?task_id=${task_id}`)
      .then((resp) => {
        getAllTasks();
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
    const { task, add } = this.props;
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
        <div className={styles.date}>
          <div><em>{createDateTime(task.datetime)}</em></div>
        </div>
        <p>{task.task_text}</p>
        {add ? null : (
          <div className={styles.name}>
            <div>-{task.sender.sender_name}</div>
          </div>
        )}
        <CompleteTask task={task} handleCompleteTask={this.handleCompleteTask} />
      </div>
    );
  }
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    completed: PropTypes.number,
    datetime: PropTypes.string,
    message_id: PropTypes.number,
    sender: PropTypes.object,
    task_id: PropTypes.number,
    task_text: PropTypes.string,
    user_id: PropTypes.number,
  }),
  add: PropTypes.bool.isRequired
};

Task.defaultProps = {
  task: {
    completed: 0,
    datetime: 'No Time Available',
    message_id: 1,
    sender: { sender_id: 7, sender_name: 'Aiden' },
    task_id: 2,
    task_text: 'arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.',
    user_id: 2,
  },
};
