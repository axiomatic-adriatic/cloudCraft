import React from 'react';
import Task from '../task/task';
import styles from './categoryList.css';
import AddTaskModalForm from '../addTaskModalForm/addTaskModalForm';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: 'none',
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.removeModal = this.removeModal.bind(this);
  }

  handleOpenModal(e) {
    this.setState({
      displayModal: 'block',
    });
  }

  removeModal() {
    console.log('closing')
    this.setState({
      displayModal: 'none',
    });
  }

  render() {
    const { categoryName, tasks, bgColor, textColor, add, getAllTasks, addTask } = this.props;
    const { displayModal } = this.state;
    const list = tasks.map((task) => (
      <Task task={task} key={task.task_id} getAllTasks={getAllTasks} add={add}/>
    ));
    return (
      <div className={styles.categoryList}>
        <h3 style={{ backgroundColor: bgColor, color: textColor }}>
          {categoryName}
          {add
            ? (
              <span
                className={styles.addTask}
                onClick={this.handleOpenModal}
                onKeyDown={this.handleOpenModal}
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
            <AddTaskModalForm
              addTask={addTask}
              displayModal={displayModal}
              removeModal={this.removeModal}
            />
          ) : null}
      </div>
    );
  }
}

export default CategoryList;
