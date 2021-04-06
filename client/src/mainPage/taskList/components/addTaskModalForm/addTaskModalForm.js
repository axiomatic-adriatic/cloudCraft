import React from 'react';
import styles from './addTaskModalForm.css';

class AddTaskModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { task } = this.state;
    const { addTask, handleCloseModal } = this.props;
    this.setState({
      task: '',
    }, () => {
      handleCloseModal();
      addTask(task);
    });
  }

  render() {
    const { task } = this.state;
    return (
      <form className={styles.addTaskForm} onSubmit={this.handleOnSubmit}>
        <label htmlFor="task">
          <h3>Create Your Own Task!</h3>
        </label>
        <textarea type="text" id="task" name="task" value={task} onChange={this.handleOnChange} />
        <input type="submit" value="Add" className={styles.button} />
      </form>
    );
  }
}

export default AddTaskModalForm;