import React from 'react';
import Task from '../task/task';
import styles from './categoryList.css';
import AddTaskModalForm from '../addTaskModalForm/addTaskModalForm';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: 'none',
    }
    this.handlOpenModal = this.handlOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal(e) {
    this.setState({
      displayModal: 'none',
    })
  }

  handlOpenModal(e) {
    this.setState({
      displayModal: 'block',
    })
  }

  render() {
    const { categoryName, tasks, bgColor, textColor, add } = this.props;
    const { displayModal } = this.state;
    const list = tasks.map((task) => <Task task={task} key={task.task_id} />);
    return (
      <div className={styles.categoryList}>
        <h3 style={{ backgroundColor: bgColor, color: textColor }}>
          {categoryName}
          {add
            ? (
              <span
                className={styles.addTask}
                onClick={this.handlOpenModal}
                onKeyDown={this.handlOpenModal}
                role="button"
                tabIndex={0}
              >
                &#10133;
              </span>
            )
            : null}
        </h3>
        <div className={styles.scrollList}>{list}</div>
        {add
          ? (
            <div id="myModal" className={styles.modal} style={{display: displayModal}}>
              <div className={styles.modal_content}>
                <span
                  className={styles.modal_close}
                  onClick={this.handleCloseModal}
                  onKeyDown={this.handleCloseModal}
                  role="button"
                  tabIndex={0}
                >
                  &times;
                </span>
                <AddTaskModalForm />
              </div>
            </div>
          ) : null}
      </div>
    );
  }
}

export default CategoryList;
