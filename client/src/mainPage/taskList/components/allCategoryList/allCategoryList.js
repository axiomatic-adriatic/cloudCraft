import React from 'react';
import CategoryList from '../categoryList/categoryList';
import styles from './allCategoryList.css';

const AllCateogryList = ({tasks, currentUserId}) => {
  const currentUserTasks = [];
  const otherUserTasks = [];
  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].user_id === currentUserId) {
        if (tasks[i].message_id !== 0) {
          otherUserTasks.push(tasks[i]);
        } else {
          currentUserTasks.push(tasks[i]);
        }
      }
    }
  }
  return (
    <div className={styles.allCategoryList}>
      <CategoryList categoryName="My Tasks" tasks={currentUserTasks} bgColor="#6096BA" textColor="white" />
      <CategoryList categoryName="Other User Tasks" tasks={otherUserTasks} bgColor="#A3CEF1" textColor="#274C77" />
    </div>
  );
};

export default AllCateogryList;
