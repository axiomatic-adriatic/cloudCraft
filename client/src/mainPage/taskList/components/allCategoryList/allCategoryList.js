import React from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../categoryList/categoryList';
import styles from './allCategoryList.css';

const AllCateogryList = ({
  tasks, currentUserId, getAllTasks, addTask,
}) => {
  const currentUserTasks = [];
  const otherUserTasks = [];
  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].user_id === currentUserId) {
        if (tasks[i].message_id !== null) {
          otherUserTasks.push(tasks[i]);
        } else {
          currentUserTasks.push(tasks[i]);
        }
      }
    }
  }
  return (
    <div className={styles.allCategoryList}>
      <CategoryList
        categoryName="My Tasks"
        tasks={currentUserTasks}
        bgColor="#A3CEF1"
        textColor="#274C77"
        add
        getAllTasks={getAllTasks}
        addTask={addTask}
      />
      <CategoryList
        categoryName="Other User Tasks"
        tasks={otherUserTasks}
        bgColor="#6096BA"
        textColor="white"
        add={false}
        getAllTasks={getAllTasks}
      />
    </div>
  );
};

export default AllCateogryList;

AllCateogryList.propTypes = {
  currentUserId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object),
  getAllTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

AllCateogryList.defaultProps = {
  currentUserId: null,
  tasks: [],
};
