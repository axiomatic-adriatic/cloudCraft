import React from 'react';
import Task from '../task/task';
import styles from './categoryList.css';

const CategoryList = ({categoryName, tasks, bgColor, textColor}) => {
  const list = tasks.map((task) => <Task task={task} key={task.task_id} />);
  return (
    <div className={styles.categoryList}>
      <h3 style={{backgroundColor: bgColor, padding: '10px', color: textColor, margin: '0px' }}>{categoryName}</h3>
      <div className={styles.scrollList}>{list}</div>
    </div>
  );
};

export default CategoryList;
