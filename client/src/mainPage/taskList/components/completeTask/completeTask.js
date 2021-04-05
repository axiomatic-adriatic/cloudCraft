import React from 'react';
import styles from './completeTask.css';

class CompleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { handleCompleteTask, task : {task_id} } = this.props;
    this.setState({
      disabled: true,
    }, () => {
      handleCompleteTask(task_id);
    });
  }

  render() {
    const { disabled } = this.state;
    const { task } = this.props;
    let checkedObj = {}
    if (task.completed === 1) {
      checkedObj.checked = 'checked';
    }
    return (
      <form className={styles.completeSection}>
        <label
          className={
            disabled || task.completed === 1 ? styles.greenComplete : styles.regularComplete
          }
          htmlFor="completed"
        >
          <input
            id="completed"
            type="checkbox"
            name="completed"
            onChange={this.handleOnChange}
            disabled={task.completed === 1 ? true : disabled}
            {...checkedObj}
          />
          <strong>Completed</strong>
        </label>
      </form>
    );
  }
}

export default CompleteTask;
