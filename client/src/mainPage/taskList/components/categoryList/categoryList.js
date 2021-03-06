import React from 'react';
import PropTypes from 'prop-types';
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

  handleOpenModal() {
    this.setState({
      displayModal: 'block',
    });
  }

  removeModal() {
    this.setState({
      displayModal: 'none',
    });
  }

  render() {
    const {
      categoryName, tasks, bgColor, textColor, add, getAllTasks, addTask,
    } = this.props;
    const { displayModal } = this.state;
    const list = tasks.map((task) => (
      <Task
        task={task}
        key={task.task_id}
        getAllTasks={getAllTasks}
        add={add}
      />
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

CategoryList.propTypes = {
  categoryName: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
  bgColor: PropTypes.oneOf(['#6096BA', '#A3CEF1']).isRequired,
  textColor: PropTypes.oneOf(['#274C77', 'white']).isRequired,
  add: PropTypes.bool.isRequired,
  getAllTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func,
};

CategoryList.defaultProps = {
  tasks: [],
  addTask: null,
};
