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
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal(e) {
    const {removeModal} = this.props;
    console.log('close me')
    this.setState({
      task: '',
    }, () => {
      removeModal();
    });
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
      this.handleCloseModal();
      addTask(task);
    });
  }

  render() {
    const { task } = this.state;
    const { displayModal } = this.props;
    return (
      <div id="myModal" className={styles.modal} style={{display: displayModal}}>
        <div className={styles.modal_content}>
          <div>
            <span
              className={styles.modal_close}
              onClick={this.handleCloseModal}
              onKeyDown={this.handleCloseModal}
              role="button"
              tabIndex={0}
            >
              &times;
            </span>
          </div>
          <div>
            <form className={styles.addTaskForm} onSubmit={this.handleOnSubmit}>
              <label htmlFor="task">
                <h3>Create Your Own Task</h3>
                <textarea type="text" id="task" name="task" value={task} onChange={this.handleOnChange} />
              </label>
              <input type="submit" value="Add" className={styles.button} />
            </form>
          </div>



        </div>
      </div>
    );
  }
}

export default AddTaskModalForm;