import React from 'react';
import CategoryList from '../categoryList/categoryList';
import styles from './allCategoryList.css';

const AllCateogryList = ({tasks, currentUserId, getAllTasks, addTask}) => {
  const currentUserTasks = [];
  const otherUserTasks = [];
  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i++) {
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
        add={true}
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
